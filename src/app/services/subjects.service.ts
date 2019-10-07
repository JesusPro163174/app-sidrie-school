import { Injectable } from '@angular/core';
import { subjectsTest } from './test/subjects.test';
import { subjectTest } from './test/subject.test';
import { scheduleTest } from './test/schedule.test';
@Injectable({
    providedIn: 'root'
})
export class SubjectsService {

    constructor() { }

    public getSubjects() {
        return subjectsTest;
    }
    public getSubject(idSubject){
        return subjectTest;
    }
    public getSchedule(idSubject){
        return scheduleTest;
    }
}
