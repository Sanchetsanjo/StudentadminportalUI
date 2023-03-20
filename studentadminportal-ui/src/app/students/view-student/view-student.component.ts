import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Gender } from 'src/app/models/api-models/gender.model';
import { Student } from 'src/app/models/api-models/student.model';
import { GenderService } from 'src/app/Services/gender.service';
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
      postalAddress:''

    }
  }

  genderlist: Gender[] =[];
Address: any;

  constructor(private readonly studentService : StudentService,
    private readonly route :ActivatedRoute,
    private readonly genderServices : GenderService,
    private snackbar: MatSnackBar) { }

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
          this.genderServices.getGenderList()
          .subscribe({
            next:(gender) => {
              this.genderlist =gender;
            }
          });
        }
      }
    );
  }

  onUpdate(): void {
   this. studentService.UpdateStudent(this.student.id ,this.student)
   .subscribe({
    next:(sucessResponce) => {
this.snackbar.open('student updated successfully',undefined,{
  duration: 2000
});
    },
    error: (responce) =>  {
      this.snackbar.open('student updated Failed',undefined,{
        duration: 2000
      });
   }

  });
  }

}
