import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regfail: string = 'false';
  regsucc: string = 'false';
  regwarn: string = 'false';
  loader: string = 'false';
  message: string = '';
  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login']);
  }

  register(form:NgForm){
    if(form.valid){
      this.loader = 'true';
      this.database.register(form.value.email, form.value.password).then((data)=>{
        let user = firebase.auth().currentUser;
        user.sendEmailVerification().then((data)=>{
          //add user node to the database 
          console.log(data);
          this.loader ='false';
          this.regsucc = 'true';
        }).catch((error)=>{
          this.loader = 'false';
          this.regfail = 'true';
          this.message =  error.message;
        })
        
      }).catch((error)=>{
        console.log(error); 
        this.loader = 'false';
        this.regfail = 'true';
        this.message = error.message;
      });
    }else{
      this.regwarn = 'true';
    }

  }

  nextpage(page: string){
    this.router.navigate([page]);
  }
}
