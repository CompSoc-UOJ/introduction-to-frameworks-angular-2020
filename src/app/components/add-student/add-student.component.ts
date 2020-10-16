import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  form: FormGroup
  studentId='';
  editStudent:any
  isEdit=false;
  
  constructor(private fb: FormBuilder, private studentService:StudentService, private router:Router,
    private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.studentId=this.route.snapshot.queryParams['studentId']
    console.log(this.studentId);
    if(this.studentId){
      this.isEdit=true;
      this.studentService.getSingleStudent(this.studentId).subscribe(res => {
        console.log(res);
        this.editStudent = res['doc']
        this.form = this.fb.group({
          name: [this.editStudent.name],
          age: [this.editStudent.age],
          dob: [this.editStudent.dob],
          sex:[this.editStudent.sex]
    
        });
      })
    }
    else {
      this.form = this.fb.group({
        name: ['',Validators.required,Validators.pattern('^[a-zA-Z]+$')],
        age: ['',Validators.required,Validators.min(1)],
        dob: ['',Validators.required],
        sex:['',Validators.required]
      });
    }
 
  }

  onSubmit(form) {
    this.studentService.saveStudent(form).subscribe(res=> {
      if (res){
        this.router.navigate(['/']);
      }
    } );

    
  }

  onUpdate(form) {
    console.log(this.studentId);
    
    this.studentService.updateStudent(form,this.studentId).subscribe(res => {
      if (res){
        this.router.navigate(['']);
      }
    })
  }
}
