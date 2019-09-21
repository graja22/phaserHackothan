import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signUpForm;
  constructor(public activatedRoute:ActivatedRoute,public http:HttpClient,public router:Router) {

    this.signUpForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
      
    })
   }

  ngOnInit() {
  }
  pushData(){
    this.http.post(`https://localhost/posts/register`,this.signUpForm.value)
    .toPromise()
    .then((response) => {
      console.log(response);
      
    },(error) => {
console.log(error);
    })
  }
}
