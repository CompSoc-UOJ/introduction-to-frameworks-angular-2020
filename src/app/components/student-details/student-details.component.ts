import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student: any
  hasBalance = false;
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const studentId = this.route.snapshot.queryParams['studentId']
    console.log(studentId);

    this.studentService.getSingleStudent(studentId).subscribe(res => {
      console.log(res['doc']);
      
      this.student = res['doc'];

    })

  }
  deleteClient() {
    this.studentService.deleteStudent(this.student._id).subscribe(res => {
      if (res) {
        this.router.navigate([''])
      }

    });
  }
  editClient() {
    this.router.navigate(['/add-student'], { queryParams: { studentId: this.student._id } })
  }

}
