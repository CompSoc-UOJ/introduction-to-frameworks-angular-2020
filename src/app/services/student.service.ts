import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get<any>('http://localhost:3000/students');

  }

  saveStudent(form){
    const student = {
      name:form.get('name').value,
      dob:form.get('dob').value,
      sex:form.get('sex').value,
      age:form.get('age').value

    }
    
    return this.http.post<any>('http://localhost:3000/students',student);
  }

  updateStudent(form,studentId){
   
    const student = [
      {
        propName:'name', value:form.get('name').value
      },
      {
        propName:'dob', value:form.get('dob').value
      },
      {
        propName:'age', value:form.get('age').value
      },
      {
        propName:'sex', value:form.get('sex').value
      }
    ]
    return this.http.patch<any>('http://localhost:3000/students/'+studentId,student);
  }

  getSingleStudent(id){
    return this.http.get('http://localhost:3000/students/'+id)  
  }
  deleteStudent(id){
    return this.http.delete('http://localhost:3000/students/'+id)
  }


}
