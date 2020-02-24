import * as uuidv4 from 'uuid/v4'

interface PersonInterface {
  uuid?: string;
  name: string;
  cpf: string;
  phone: number;
}
export class Person {
  uuid: string;
  name: string;
  cpf: string;
  phone: number;

  constructor(person: PersonInterface) {
    this.uuid = uuidv4();
    this.name = person.name;
    this.phone = person.phone;
    this.cpf = person.cpf
  }
}