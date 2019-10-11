import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
@Component({
    selector: 'app-convalidacion',
    templateUrl: './convalidacion.page.html',
    styleUrls: ['./convalidacion.page.scss'],
})
export class ConvalidacionPage implements OnInit {
    public students:any = [];
    constructor(private studentService: StudentsService) { 
        this.getStudents();
    }

    ngOnInit() {
    }

    private getStudents(){
        this.students = this.studentService.getStudents('convalidacion');
    }

}
