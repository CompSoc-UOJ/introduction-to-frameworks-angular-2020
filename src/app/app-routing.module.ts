import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'student', component: StudentDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
