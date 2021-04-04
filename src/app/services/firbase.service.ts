import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, share } from 'rxjs/operators';
import { FileToUpload } from '../interfaces/fileToUpload';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    private path = "/files";
    
    
    constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }
    
    uploadFile(fileToUpload: FileToUpload): FileToUpload{
        const filePath = this.path + '/' + fileToUpload.file.name;
        const ref = this.storage.ref(filePath);
        const upload = this.storage.upload(filePath, fileToUpload.file);
        fileToUpload.cancalUpload = upload.cancel
       
        
        upload.snapshotChanges().pipe(
            finalize(() => {
                ref.getDownloadURL().subscribe(url => {                                        
                    this.saveFileData({file: fileToUpload.file, url});
                })
            })
        ).subscribe();

        return { ...fileToUpload, $percentage: upload.percentageChanges().pipe(share())} 
    }

    private saveFileData(fileUpload: FileToUpload) {
        this.db.list(this.path).push(fileUpload);
    }

    
}
