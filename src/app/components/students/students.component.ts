import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentsArray = [];
  studentsCount: Number;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(res => {
      console.log(res.response.students);
      this.studentsCount = res.response.count;

      this.studentsArray = res.response.students;
      console.log(this.studentsArray);

    });
  }

  toStudentDetails(id) {
    this.router.navigate(['/student'], { queryParams: { studentId: id } })
  }
}
