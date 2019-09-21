import { Component, OnInit } from "@angular/core";
import { FormControl,FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
signInForm;
  constructor(public activatedRoute:ActivatedRoute,public http:HttpClient,public router:Router){
    this.signInForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
      
    })
  } 
  
  ngOnInit() {
    this.checkData();
  }
  checkData(){
    this.http.get(`https://localhost/3000/posts/login`)
      .toPromise()
      .then((response) => {
        this.signInForm = response;
        console.log(response);
      }, (error) => {
        console.log(error);
      })
  }
  
}
