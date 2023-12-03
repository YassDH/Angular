import { Component, OnInit, inject } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private authService : AuthentificationService = inject(AuthentificationService)
  router : Router = inject(Router);
  loggedIn : boolean = false

  ngOnInit() {
    this.authService.loggedIn$.subscribe((isAuthenticated) => {
      this.loggedIn = isAuthenticated;
    });
  }

  logout(){
    if(this.authService.logout()){
      alert("Logged Out !")
      this.router.navigate(['cv'])
    }else{
      alert("An error has occurred. Please try again !")
    }
  } 
    
  constructor(){}
}
