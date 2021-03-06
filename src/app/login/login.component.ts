import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../servcie/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username ='test'
password= 'test'
errorMessage='Invalid credentials'
invalidLogin= false


  constructor(private router : Router, private hardcodedAuthenticationService:  HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin()
  {
    //console.log(this.username);
    //if(this.username==="test"&& this.password==="test"){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    } else{
      this.invalidLogin= true
    }
  }

}
