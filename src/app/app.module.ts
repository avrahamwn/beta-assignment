import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressWindowComponent } from './components/progress-window/progress-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FileItemComponent } from './components/file-item/file-item.component';
import { ProgressBarModule } from 'primeng/progressbar';
@NgModule({
  declarations: [
    AppComponent,
    ProgressWindowComponent,
    FileItemComponent,
       
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireStorageModule,
      ProgressBarModule
     

      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
