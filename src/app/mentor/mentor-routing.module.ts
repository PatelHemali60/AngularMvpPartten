import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorComponent } from './mentor.component';
import { MentorContainerComponent } from './mentor-container/mentor-container.component';
import { MentorListPresentationComponent } from './mentor-container/mentor-list-presentation/mentor-list-presentation.component';

const routes: Routes = [
  {
    path: '',
    component: MentorContainerComponent,
    
    children: [
      {
        path: 'list',
        component: MentorListPresentationComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
