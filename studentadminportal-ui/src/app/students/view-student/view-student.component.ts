import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/api-models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  studentId:string|null | undefined;
  student  :Student ={
    id: '',
    firstname: '',
    lastname: '',
    dateofBirth: '',
    email: '',
    mobile: 0,
    profileimageUrl: '',
    genderId: '',
    gender : {
      id :'',
      description: ''
    },
    Address: {
      id:'',
      physicalAddress:'',
      postalAddress:'',
      studentId:''
    }
  }

  constructor(private readonly studentService : StudentService,
    private readonly route :ActivatedRoute) { }


  ngOnInit(): void {
    // this.studentService.GetStudentAsync();
    this.route.paramMap.subscribe(
      (params)=>{
        this.studentId =params.get('id');

        if(this.studentId){
          this.studentService.GetStudentAsync(this.studentId)
          .subscribe({
            next:(students) => {
              this.student =students;
            }
          });
        }
      }
    );
  }

}
