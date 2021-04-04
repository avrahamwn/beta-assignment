
import { Component, Input } from '@angular/core';
import { FileToUpload } from 'src/app/interfaces/fileToUpload';
import { ProgressWindowService } from 'src/app/services/progress-window.service';

@Component({
    selector: 'app-progress-window',
    templateUrl: './progress-window.component.html',
    styleUrls: ['./progress-window.component.scss']
})
export class ProgressWindowComponent  {

    @Input() files : FileToUpload[];    
    displayContent: boolean = true;
    
    
    constructor(public progressWindowService: ProgressWindowService) { }   

    onMinimizeIconClicked() {
        this.displayContent = !this.displayContent;
    }

    onCloseIconClicked() {
        this.progressWindowService.closeProgressWindow();
        
        this.files.forEach(file => {
            const cancal = file.cancalUpload()
            console.log(cancal ? 'cancalation succeed' : 'cancalation failed');
        })
    }

}
