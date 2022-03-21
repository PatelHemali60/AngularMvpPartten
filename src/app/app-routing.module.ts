import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgtemplateDemoComponent } from './components/ngtemplate-demo/ngtemplate-demo.component';

const routes: Routes = [
  {
    path:'', redirectTo:'users', pathMatch:'full'
  },
  {
    path: "data-binding",
    loadChildren: () =>
      import('./modules/data-binding/data-binding.module').then((m) => m.DataBindingModule)
  },
  {
    path: "directive-pipes",
    loadChildren: () =>
      import('./modules/directives-pipes/directives-pipes.module').then((m) => m.DirectivesPipesModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then(
        (m) => m.UsersModule
      ),
  },
  {
    path: 'resumebuilder',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builder.module').then(
        (m) => m.ResumeBuilderModule
      ),
  },
  { path: 'employees', loadChildren: () => import('./Assesments/employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'practice', loadChildren: () => import('./modules/practice/practice.module').then(m => m.PracticeModule) },
  { path: 'todo-app', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule) },

  { path: 'ngTemp', component:NgtemplateDemoComponent},
  
  { path: 'Temp-outlet',
   loadChildren: () => import('./modules/demo-ng-template-outlet/demo-ng-template-outlet.module').then(
     m => m.DemoNgTemplateOutletModule) },
 
 
 
   { path: 'mentor', loadChildren: () => import('./mentor/mentor.module').then(m => m.MentorModule) },
   //perosn for subject
  { path: 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
