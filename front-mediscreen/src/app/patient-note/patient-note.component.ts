import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../model/note';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-patient-note',
  templateUrl: './patient-note.component.html',
  styleUrls: ['./patient-note.component.scss']
})
export class PatientNoteComponent implements OnInit {

  note!: Note;
  patient!: Patient;
  patientNoteForm!: FormGroup;
  newNote!: Note;

  constructor(
    private route: ActivatedRoute,
    private routeNav: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private patientService : PatientService
  ) { }

  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.patientService.getNote(patientId).subscribe(
      response => {
        this.note = response;
        this.initForm(response);
      }
    );
    this.patientService.getPatient(patientId).subscribe(
      reponse => {
        this.patient = reponse;
      }
    );
  }

  resetPatientNote(patientNoteId: string){
    let newPatientNote: Note = {
      patientId: String(this.patient.id),
      notes: ''
    };
    let id = Number(patientNoteId)
    this.patientService.editNote(id, newPatientNote).subscribe(
      response => {
        this.routeNav.navigate(['/patients']);
      },
      error => console.log(error)
    );
  }

  initForm(note:Note){
    this.patientNoteForm = this.formBuilder.group({
      notes:note.notes
    });
  }


  goBack(): void {
    this.location.back();
  }

  onSubmitForm(){
    this.patientService.editNote(this.patient.id, this.patientNoteForm.value).subscribe(
      response => {
        this.routeNav.navigate(['/patients']);
      }
    );
  }

}
