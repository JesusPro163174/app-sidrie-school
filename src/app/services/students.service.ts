import { Injectable } from '@angular/core';
import { studentsActivesTest } from './test/students-actives.test';
@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    constructor() { }

    getStudents(status:string){
        return studentsActivesTest;
    }
}
