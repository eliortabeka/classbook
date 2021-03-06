import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {StudentInterface} from "../interfaces/student.interface";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private afs: AngularFirestore) { }

  saveStudent(student: StudentInterface): any {
    return this.afs.collection('students').add(student);
  }

  getStudents() {
    return this.afs.collection('students').valueChanges({ idField: 'id' });
  }
}
