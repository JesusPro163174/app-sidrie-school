import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
    selector: 'app-add-student',
    templateUrl: './add-student.page.html',
    styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {

    constructor(private loadingController : LoadingController) { }

    ngOnInit() {
    }

    onCreate() {
        this.presentLoadingWithOptions();
    }
    
    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner: 'circles',
            duration: 5000,
            message: 'Registrando usuario',
            translucent: true,
            cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
    }

}
