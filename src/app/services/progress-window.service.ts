import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressWindowService {
    private displayProgressWindow: BehaviorSubject<boolean> = new BehaviorSubject(false);

    openProgressWindow() {
        this.displayProgressWindow.next(true);
    }
    closeProgressWindow() {
        this.displayProgressWindow.next(false);
    }
    getDisplayProgressWindow() {
        return this.displayProgressWindow;
    }

  
}
