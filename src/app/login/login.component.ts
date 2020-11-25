import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

onSubmit()
{
  if(this.username==="pushparaj" && this.password==="pushparaj")
  {
    this.invalidLogin=false;
  }
  else
  {
    this.invalidLogin=true;
  }
}

}
