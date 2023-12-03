import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginData } from './Model/LoginData';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthUser } from './Model/AuthUser';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService{
  private http = inject(HttpClient);
  private user = new BehaviorSubject<AuthUser | null>(null);
  user$ = this.user.asObservable();
  private loggedOut = new BehaviorSubject<boolean>(true);
  loggedOut$ = this.loggedOut.asObservable();
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor() {
    this.refreshAuthState()
   }  

  login(data : LoginData) : Observable<boolean>{
    return this.http.post("https://apilb.tridevs.net/api/Users/login", data).pipe(
      map((response: any) => {
        const authToken = {
          token: response.id,
          ttl: response.ttl,
        };

        const user = new AuthUser(response.userId, data.email);

        localStorage.setItem('AuthToken', JSON.stringify(authToken));
        localStorage.setItem('AuthUser', JSON.stringify(user));

        this.refreshAuthState();
        return true;


      }),
      catchError((error: any) => {
        this.refreshAuthState();
        return of(false);
      })
    );

  }

  logout(){
    const user = localStorage.getItem('AuthUser');
    if(!user){
      return false
    }
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('AuthUser');
    this.refreshAuthState()
    return true
  }

  refreshAuthState(){
    const userFound = localStorage.getItem('AuthUser');
    if(!userFound){
      this.user.next(null);
      this.loggedIn.next(false);
      this.loggedOut.next(true);
    }else{
      const user : AuthUser = JSON.parse(userFound);
      this.user.next(new  AuthUser(user.id, user.email));
      this.loggedIn.next(true);
      this.loggedOut.next(false);
    }
  }
}
