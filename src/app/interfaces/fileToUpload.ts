import { Observable } from 'rxjs';


export interface FileToUpload{   
    url?: string;    
    $percentage?: Observable<number>;
    file: File;    
    cancalUpload?: ()=>boolean;
    
}