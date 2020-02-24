import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {


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

}
