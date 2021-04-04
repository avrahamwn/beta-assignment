import { Component, OnInit } from '@angular/core';

import { FirebaseService } from './services/firbase.service';
import { FileToUpload } from './interfaces/fileToUpload';
import { ProgressWindowService } from './services/progress-window.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    filesToUpload: FileToUpload[] = [];

    constructor(private fireBaseService: FirebaseService, private progressWindowService: ProgressWindowService) { }





    onUploadFiles(event) {
        
        console.log(event.target.files);
        Array.from(event.target.files).forEach((file: File, index) => {
            let fileToUpload: FileToUpload = {                
                file
                
            }            

           
            this.filesToUpload.push(this.fireBaseService.uploadFile(fileToUpload)) ;

        

        })

        this.progressWindowService.openProgressWindow();


    }
}
