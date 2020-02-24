import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PopupComponent } from '../shared/popup/popup.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @ViewChild(PopupComponent) popup: PopupComponent;

  public persons: Person[] = [];

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

  openPopup(){
    this.popup.openPopup();
  }



}
