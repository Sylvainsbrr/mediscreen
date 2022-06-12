import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Patient } from '../model/patient';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {

  patient!: Patient;
  patientForm!: FormGroup;

  constructor(
    private routeNav: Router,
    private location: Location,
    private route: ActivatedRoute,
    private patientService: PatientService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.patientService.getPatient(patientId).subscribe(
      response => {
        this.patient = response;
        this.initForm(response);
      }
    );
  }

  initForm(patient:Patient){
    this.patientForm = this.formBuilder.group({
      firstName:patient.firstName,
      lastName:patient.lastName,
      dateOfBirth:patient.dateOfBirth,
      gender:patient.gender,
      address:patient.address,
      phone:patient.phone
    });
  }

  onSubmitForm(){
    this.patientService.editPatient(this.patient.id, this.patientForm.value).subscribe(
      response => {
        this.routeNav.navigate(['/patients']);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}

