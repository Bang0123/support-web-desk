import { Component, OnInit } from '@angular/core';
import { Signin } from './signin';
import { AuthenticationService } from '../../services/authentication.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent extends Signin {
  userName = 'admin@gmail.com';
  password = 'Admin01*';
  working: boolean;
  constructor(protected router: Router,
    protected oAuthService: OAuthService,
    protected authenticationService: AuthenticationService) {
    super(router, oAuthService, authenticationService);
    this.model.username = this.userName;
    this.model.password = this.password;
    this.isLoading().subscribe(next => {
      next = false;
    });
    this.isLoading().subscribe(bool => {
      this.working = bool;
    });
  }

}
