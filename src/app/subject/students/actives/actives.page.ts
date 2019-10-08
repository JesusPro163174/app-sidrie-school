import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
@Component({
    selector: 'app-actives',
    templateUrl: './actives.page.html',
    styleUrls: ['./actives.page.scss'],
})
export class ActivesPage implements OnInit {
    public students:any = [];
    constructor(private studentService: StudentsService){
        this.getStudents();
    }
    ngOnInit() {
    }

    public getStudents(){
        this.students = this.studentService.getStudents("activos")
    }

    
    

}
