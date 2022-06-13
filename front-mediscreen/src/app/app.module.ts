import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientNoteComponent } from './patient-note/patient-note.component';
import { PatientReportComponent } from './patient-report/patient-report.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientAddComponent,
    PatientEditComponent,
    PatientListComponent,
    PatientDetailComponent,
    PatientNoteComponent,
    PatientReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
