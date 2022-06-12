import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  patient!: Patient;

  constructor(
    private patientService : PatientService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    
   }

  ngOnInit(): void {
    
    const patientId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.patientService.getPatient(patientId).subscribe(
      response => {
        this.patient = response;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
