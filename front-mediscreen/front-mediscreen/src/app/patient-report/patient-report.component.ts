import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report } from '../model/report';
import { PatientService } from '../patient.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.scss']
})
export class PatientReportComponent implements OnInit {

  patientReport!: Report;

  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.patientService.getPatientReport(patientId).subscribe(
      response => {
        this.patientReport = response;
        console.log(response);
        
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
