import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="pushparaj";
  password:string="pushparaj";
  errorMessage="Invalid Credentials";
  invalidLogin=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

onSubmit()
{
  if(this.username==="pushparaj" && this.password==="pushparaj")
  {
    this.router.navigate(['welcome',this.username]);
    this.invalidLogin=false;
  }
  else
  {
    this.invalidLogin=true;
  }
}

}
