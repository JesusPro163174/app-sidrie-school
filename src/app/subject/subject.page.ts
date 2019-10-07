import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';
@Component({
    selector: 'app-subject',
    templateUrl: './subject.page.html',
    styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
    public subject:any = [];
    public schedule:any = [];
    constructor(private subjectsService: SubjectsService) {
        this.getSubject();
        this.getSchedule();
    }

    ngOnInit() {
    }

    private getSubject(){
        this.subject = this.subjectsService.getSubject(1);
    }
    private getSchedule(){
        this.schedule = this.subjectsService.getSchedule(1);
    }

}
