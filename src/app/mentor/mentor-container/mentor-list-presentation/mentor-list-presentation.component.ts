import { GlobalPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { mentors, mentorForm, MentorEditDetails } from '../../mentor.model';
import { MentorFormPresentationComponent } from '../mentor-form-presentation/mentor-form-presentation.component';
import { MentorListPrenterService } from '../mentor-list-presnter/mentor-list-prenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  viewProviders:[MentorListPrenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MentorListPresentationComponent implements OnInit {
  public tempMentorList: mentors[] = [];

  /** tempmentor list for displaying in table declare here */

  /** setter for user list */
  @Input() public set mentorList(value: mentors[] | null) {
    if (value) {
      this._MentorList = value;
      this.tempMentorList = value;
    }
  }
  public get mentorList(): mentors[] | null {
    return this._MentorList;
  }

  /** emits user id to be deleted */
  @Output() public delete: EventEmitter<number>;
  /** emitter to emit add user data */
  @Output() public addMentors: EventEmitter<mentorForm>;
  /** emitter to emit edit user details */
  @Output() public editMentors: EventEmitter<MentorEditDetails>;

  /** temp user list for displaying in table */
  // public tempMentorList!: mentors[];
  /** user id */
  public mentorId!: number;
  /** search field control object */
  public search: FormControl;

  private _MentorList: mentors[];
  /** to destroy the subscriptions  */
  private destroy: Subject<void>;

  constructor(
    private mentorlistPresenterService: MentorListPrenterService,
    private overlay: Overlay
  ) {
    this._MentorList = [];
    this.delete = new EventEmitter();
    this.addMentors = new EventEmitter();
    this.editMentors = new EventEmitter();
    this.search = new FormControl();
    this.destroy = new Subject();
  }

  ngOnInit(): void {
    this.mentorlistPresenterService.delete$.subscribe((id: number) => {
      this.delete.emit(id);
    })

    this.search.valueChanges.pipe(takeUntil(this.destroy)).subscribe((searchTerm) => {
      this.searchUser(searchTerm);
    })
  }

  /** search user by search term */
  public searchUser(searchTerm: string): void {
    this.tempMentorList = this.mentorlistPresenterService.getFilteredList(this._MentorList, searchTerm.toLowerCase().trim());
  }

  /** on delete button click */
  public onDelete(id: number) {
    this.mentorlistPresenterService.deletementor(id)
  }

  /** on add button click */
  public onAdd() {
    this.openMentorForm();
  }

  /** on edit button click */
  public onEdit(item: mentors) {
    this.mentorId = item.id;
    this.openMentorForm(item);
  }

  /**
   * open user form dialog
   * @param mentordata user data - Optional
   */
  public openMentorForm(mentordata?: mentors) {
    let componentRef: ComponentRef<MentorFormPresentationComponent>;
    let overlayRef: OverlayRef;
    // set overlay config
    let overlayConfig: OverlayConfig = new OverlayConfig();
     overlayConfig.hasBackdrop = true;
    //  overlayConfig.positionStrategy
     
   



    
    // create overlay reference
    overlayRef = this.overlay.create(overlayConfig);
    const portal: ComponentPortal<MentorFormPresentationComponent> = new ComponentPortal<MentorFormPresentationComponent>(MentorFormPresentationComponent);
    // attach overlay with portal
    componentRef = overlayRef.attach(portal);
    // listen to backdrop click
    overlayRef.backdropClick()
      .pipe(take(1)).subscribe(() => {
        overlayRef.detach();
      });

    // pass user data as input
    componentRef.instance.mentorData = mentordata as mentors;
    // listen to cancel event
    componentRef.instance.cancel.subscribe((res) => {
      overlayRef.detach();
    })
    // listen to add user event
    componentRef.instance.add.subscribe((res: mentorForm) => {
      this.addMentors.emit(res);
    })
    // listen to edit user event
    componentRef.instance.edit.subscribe((res: mentorForm) => {
      this.editMentors.emit({ mentorForm: res, id: this.mentorId });
    })
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }



}
