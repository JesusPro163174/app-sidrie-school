import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
@Component({
    selector: 'app-proceso',
    templateUrl: './proceso.page.html',
    styleUrls: ['./proceso.page.scss'],
})
export class ProcesoPage implements OnInit {
    public students:any = [];
    constructor(private studentService: StudentsService) {
        this.getStudentsProcess();
    }

    ngOnInit() {
    }

    private getStudentsProcess() {
        this.students =  this.studentService.getStudents('proceso');
    }

}
