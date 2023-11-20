export class Person {
  id: number;
  name: string;
  firstname: string;
  age: number;
  path: string;
  cin: number;
  job: string;

  constructor(id: number = 0, name: string = "try", firstname: string = "me", age: number = 90, path: string = "", cin: number = 0 , job: string = "nothing") {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }
}
