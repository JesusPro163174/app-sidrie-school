import { Component } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';

export interface Subject{
    id:number;
    name:string;
    grade:number;
    cover_page:string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public subjects:any;
    id=1;

    constructor(private subjectsService:SubjectsService) { 
        setTimeout(() => {
           this.getSubjects();
          }, 2000);
       
    }

    public getSubjects(){
        this.subjects = this.subjectsService.getSubjects();
        console.log(this.subjects);
    }

}
