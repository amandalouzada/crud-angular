import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PopupComponent } from '../shared/popup/popup.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @ViewChild('newPersonPopup') newPersonPopup: PopupComponent;
  @ViewChild('editPersonPopup') editPersonPopup: PopupComponent;
  @ViewChild('deletPersonPopup') deletPersonPopup: PopupComponent;
  @ViewChild('newPersonForm') newPersonForm: FormComponent;

  public persons: Person[] = [];
  public selectedPerson: Person;

  constructor() {
    const fakePersons = [
      new Person({
        name: 'Amanda',
        cpf: '95922682075',
        phone: 5563999990000
      }),
      new Person({
        name: 'Maria',
        cpf: '41744552010',
        phone: 5563991110000
      })
    ]
    this.persons = fakePersons;
  }

  ngOnInit(): void {
  }

  openNewPersonPopup() {
    this.selectedPerson = null;
    this.newPersonPopup.openPopup();
  }

  saveNewPerson(person: Person) {
    this.persons.push(new Person(person))
    this.newPersonPopup.closePopup();
  }

  showPerson(person: Person) {
    this.editPersonPopup.openPopup();
    this.selectedPerson = person;
  }

  editPerson(person: Person){
    const { uuid } = this.selectedPerson;
    this.persons = this.persons.map((p: Person) => {
      if (uuid == p.uuid) {
        return {
          uuid,
          ...person
        }
      }
      return p;
    })
    this.selectedPerson = null;
    this.editPersonPopup.closePopup();
  }

  confirmDeletePerson(person: Person) {
    this.deletPersonPopup.openPopup();
    this.selectedPerson = person;
  }

  delete() {
    const { uuid } = this.selectedPerson;
    this.persons = this.persons.filter((person: Person) => {
      if (uuid != person.uuid)
        return true;
    })
    this.selectedPerson = null;
    this.deletPersonPopup.closePopup();
  }

  cancelDelete() {
    this.deletPersonPopup.closePopup();
    this.selectedPerson = null;
  }

  resetForm(){
    this.newPersonForm.personForm.reset();
  }

}
