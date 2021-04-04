import { Component, Input } from '@angular/core';
import { FileToUpload } from 'src/app/interfaces/fileToUpload';


@Component({
    selector: 'app-file-item',
    templateUrl: './file-item.component.html',
    styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent {
    @Input() file: FileToUpload;
   
 
    onTrashClicked() {
        const cancal = this.file.cancalUpload()
        console.log(cancal ? 'cancalation succeed' : 'cancalation failed');
        
    }

    

}
