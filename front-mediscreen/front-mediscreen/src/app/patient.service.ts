import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './model/patient';
import { Note } from './model/note';
import { Report } from './model/report';
import { environment } from 'src/environments/environment';
// import { Note } from './model/note';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  // CRUD PATIENT

  getPatients(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(environment.patientserviceurl+'/patients');
  }

  getPatient(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(environment.patientserviceurl+'/patient-info/' + id);
  }

  deletePatient(id: number): Observable<Patient>{
    return this.httpClient.delete<Patient>(environment.patientserviceurl+'/patient/' + id);
  }

  editPatient(id: number, params:any): Observable<any>{
    return this.httpClient.put<Patient>(environment.patientserviceurl+'/patient/' + id, params);
  }

  addPatient(params:any): Observable<any>{
    return this.httpClient.post<Patient>(environment.patientserviceurl+'/patient', params);
  }

  // CRUD NOTES

  getNote(id: number): Observable<Note>{
    return this.httpClient.get<Note>(environment.noteserviceurl+'/patient-note/' + id);
  }

  editNote(id: number, params:any): Observable<any>{
    return this.httpClient.put<Note>(environment.noteserviceurl+'/patient-note/' + id, params);
  }

  deleteNote(id: string): Observable<any>{
    return this.httpClient.delete<Note>(environment.noteserviceurl+'/patient-note/' + id);
  }

  saveNote(params: any): Observable<any>{
    return this.httpClient.post<Note>(environment.noteserviceurl+'/patient-note/', params);
  }

  // REPORT

  getPatientReport(id: number): Observable<Report>{
    return this.httpClient.post<Report>(environment.reportservice+'/patient-report/' + id , {});
  }

}
