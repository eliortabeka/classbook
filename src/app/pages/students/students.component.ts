import {Component, OnDestroy, OnInit} from '@angular/core';
import {StudentInterface} from "../../interfaces/student.interface";
import {CoreService} from "../../services/core.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {

  students: StudentInterface[];
  studentsSub;

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.studentsSub = this.coreService.getStudents().subscribe((studentsDocs: any) => {
      this.students = studentsDocs;
    })
  }

  ngOnDestroy() {
    if (this.studentsSub) this.studentsSub.unsubscribe();
  }

}
