import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];
  patient!: Patient;

  constructor(
    private route: Router,
    private patientService : PatientService
    ) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(
      reponse => {
        this.patients = reponse;
      }
    );
  }

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(
      reponse => {
        let patientId = String(id);
        this.patientService.deleteNote(patientId).subscribe(
          reponse => {
            this.patients = this.patients.filter(patient => patient.id !== id);
          }
        );
      }
    );
  }

}
