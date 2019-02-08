import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  DjProfiles = new Array();
  houseDjs = new Array();
  hipHopDjs = new Array();
  bio;
  city;
  fullname;
  email;
  gender;
  payment;
  price;
  role;
  stagename;
  

  constructor(public database: DatabaseService) { }
   
  ngOnInit() {
    this.HouseSection();
    this.HipHopSection();
    this.database.retreiveDJs().then((data:any)=>{
     this.DjProfiles = data;
     this.role = this.DjProfiles;
     console.log(this.role)

    })
  }

  HouseSection(){
    this.database.houseDjs().then((data:any)=>{
      console.log(data)
      this.houseDjs = data;
    })
  }

  HipHopSection(){
    this.database.HipHopDjs().then((data:any)=>{
      console.log(data)
      this.hipHopDjs = data;
    })
  }

  showinfo(x) {
    console.log(x);
    this.fullname = x.fullname;
    this.bio = x.bio;
    this.city = x.city;
    this.email = x.email;
    this.gender = x.gender;
    this.payment = x.payment;
    this.price = x.price;
    this.stagename =x.stagename
  }

  

}
