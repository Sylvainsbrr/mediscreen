import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './model/patient';
import { Note } from './model/note';
import { Report } from './model/report';
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
    return this.httpClient.get<Patient[]>('http://localhost:8082/patients');
  }

  getPatient(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>('http://localhost:8082/patient-info/' + id);
  }

  deletePatient(id: number): Observable<Patient>{
    return this.httpClient.delete<Patient>('http://localhost:8082/patient/' + id);
  }

  editPatient(id: number, params:any): Observable<any>{
    return this.httpClient.put<Patient>('http://localhost:8082/patient/' + id, params);
  }

  addPatient(params:any): Observable<any>{
    return this.httpClient.post<Patient>('http://localhost:8082/patient', params);
  }

  // CRUD NOTES

  getNote(id: number): Observable<Note>{
    return this.httpClient.get<Note>('http://localhost:8085/patient-note/' + id);
  }

  editNote(id: number, params:any): Observable<any>{
    return this.httpClient.put<Note>('http://localhost:8085/patient-note/' + id, params);
  }

  deleteNote(id: string): Observable<any>{
    return this.httpClient.delete<Note>('http://localhost:8085/patient-note/' + id);
  }

  saveNote(params: any): Observable<any>{
    return this.httpClient.post<Note>('http://localhost:8085/patient-note/', params);
  }

  // REPORT

  getPatientReport(id: number): Observable<Report>{
    return this.httpClient.post<Report>('http://localhost:8091/patient-report/' + id , {});
  }

}
