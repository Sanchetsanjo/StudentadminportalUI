import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Student } from '../models/ui-models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students :Student[] = [];
  displayedColumns: string[] = ['firstname', 'lastname', 'dateofBirth', 'email','mobile','gender','edit'];
  dataSource : MatTableDataSource<Student>= new MatTableDataSource<Student>();

  @ViewChild(MatPaginator)matPaginator!:MatPaginator;
  @ViewChild(MatSort)matSort!:MatSort;
  filterString ='';
  constructor(private studentServices:StudentService) { }

  ngOnInit(): void {
    //fetch students
    this.studentServices.getAllStudents()
    .subscribe({
      next: (students) => {
        console.log(students)
         this.students=students;
       this.dataSource=new MatTableDataSource<Student>(this.students);

        if (this.matPaginator){
          this.dataSource.paginator = this.matPaginator;
        }

        if (this.matSort) {
          this.dataSource.sort =this.matSort;
        }
    },
      error: (responce) =>  {
         console.log(responce);
      }
      });
    // .subscribe({
    //   next: (res)=> console.log(res),
    //   error: (err)=>console.error(err),
    //   complete:()=>console.info('completed')
    //   }
    // );
  }

  filterStudents(){
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
