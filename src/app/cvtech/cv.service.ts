import {inject, Injectable} from '@angular/core';
import {Person} from "../Model/Person";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes : Person[] = [
    new Person(1, "soussi", "zakaria", 22, "me.jpg", 11111, "Tennis Player"),
    new Person(2, "ben Salha", "mahdi", 15, "mahdi.jpg", 12221, "Money Collector"),
    new Person(3, "yousfi", "wissem", 34, "wissem.jpg", 23334, "Gamer"),
    new Person(4, "dhaoudi", "yassine", 30, "", 33224, "Hacker"),
  ]
  private addedPersonnes : Person[] = []
  private selectedPerson$ : BehaviorSubject<Person> = new BehaviorSubject(new Person())
  http =inject(HttpClient)

  getPersonnes$(): Observable<Person[]> {
    return this.http.get<Person[]>('https://apilb.tridevs.net/api/personnes').pipe(
      map((personnes) => {
        this.personnes = personnes;
        return [...personnes, ...this.addedPersonnes]
      }),
      catchError((e) => {
        return of([...this.personnes, ...this.addedPersonnes]);
      })
    )
  }

  deletehttpPersonne$(id : number){
    return this.http.delete(`https://apilb.tridevs.net/api/personnes/${id}`);
  }
  getPersonneById(id: number): Observable<Person | null> {
    const person = this.personnes.find((person) => {
      return person.id == id
    });
    if(person != undefined)
      return of(person)
    else 
      return of(null)
  }
  getPersonneByName(name: string): Observable<Person[]> {
    if(name.length > 0){
      const params = new HttpParams().set('filter', JSON.stringify({where:{name:{like:`%${name}%`}}}));
      return this.http.get<Person[]>("https://apilb.tridevs.net/api/personnes/", { params });
    }else{
      return of([])
    }
    
  }

  getSelectedPersonListner$() : Observable<Person>{
    return this.selectedPerson$.asObservable()
  }

  changeSelectedPerson(person : Person){
    this.selectedPerson$.next(person)    
  }

  addPersonne(personne: Person) {
    personne.id = this.personnes.length + 1;
    this.addedPersonnes.push(personne);
  }
  deletePersonne(item: Person) {
    let index = this.personnes.indexOf(item);
    this.personnes.splice(index, 1);
  }
}
