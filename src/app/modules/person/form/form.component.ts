import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { FormValidations } from './form-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public personForm: FormGroup;
  @Output() save: EventEmitter<Person> = new EventEmitter();

  constructor() {
    this.personForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      cpf: new FormControl('', {
        validators: [Validators.required, FormValidations.cpfValidator]
      }),
      phone: new FormControl('', {
        validators: [Validators.required, FormValidations.phoneValidator]
      }),
    })
  }

  ngOnInit(): void {
  }

  saveForm() {
    this.save.emit(this.personForm.value);
    this.personForm.reset();
  }

}
