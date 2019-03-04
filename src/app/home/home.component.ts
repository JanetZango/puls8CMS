import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { obj } from '../../app/class';
import ProfileArr from '../../app/class';
import profobj from '../../app/class';
import { jitExpression } from '@angular/compiler';
declare var $;
declare var waypoints;
declare var counterUp;

// import counterUp from 'counterup';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  DjProfiles = new Array();
  userProfile = new Array();
  houseDjs = new Array();
  hipHopDjs = new Array();
  DeepHouseDjs = new Array();
  kwaitoDjs = new Array();
  bio: any = '';
  city: any;
  fullname: any = '';
  email;
  gender;
  payment;
  price;
  role;
  stagename: any;
  totalDjs;
  img: string = 'http://www.dealnetcapital.com/files/2014/10/blank-profile.png';
  modal;
  obj = {} as obj
  page: string = 'home';
  getprofileArr=[];
  lactive: string = 'bio';
  err: string;
  genre;
  countdj=0;
  countuser=0;
  commercial;
  hiphop
  deephouse;
  getprofileArr2=[];
  person;
  key
  ProfileArr= ProfileArr;
  cardselection: string = 'dj';
  constructor(public database: DatabaseService, private router: Router) {
    this.database.retreiveDJs().then((data: any) => {
      this.DjProfiles = data;
       console.log(this.DjProfiles)
       this.key = this.DjProfiles[0].key
      this.countdj =  this.DjProfiles.length
      console.log(this.key)
      console.log(this.DjProfiles)
    }).then(function(){
      $('.counter').counterUp({
        time: 2500
      });
    })

    this.database.retreiveUsers().then((data: any) => {
      this.userProfile = data;
      this.countuser=  this.userProfile.length
      console.log(this.countuser)
      console.log(this.userProfile)
    })


    this.selectGenre();
    this.selectGender();
    this.selectcity();

    this.database.retreiveHouseDJs().then((data:any)=>{
      this.houseDjs.length = 0;
      this.houseDjs = data;
      console.log(this.houseDjs)
    })
    this.database.retreiveHipHopDJs().then((data:any)=>{
      this.hipHopDjs.length = 0;
      this.hipHopDjs = data;
      console.log(this.hipHopDjs)
    })
    this.database.retreiveDeepHouseDJs().then((data:any)=>{
      this.DeepHouseDjs.length = 0;
      this.DeepHouseDjs = data;
      console.log(this.DeepHouseDjs)
    })

    this.database.retreiveKwaitoDJs().then((data:any)=>{
      this.kwaitoDjs.length = 0;
      this.kwaitoDjs = data;
      console.log(this.kwaitoDjs)
    })

   
   
  }
getdj(){
  this.database.retreiveDJs().then((data: any) => {
    this.DjProfiles = data;
    this.getprofileArr2=data;
    this.countdj=  this.DjProfiles.length
    console.log(this.countdj)
    console.log(this.DjProfiles)
  })
}
 
  getusers(){
    this.database.retreiveUsers().then((data: any) => {
      this.DjProfiles = data;
      this.countuser=  this.DjProfiles.length
      console.log(this.countuser)
      console.log(this.userProfile)
    })
  }
  ngOnInit() {
    this.stagename = '';
    this.bio = '';
    this.fullname = '';
    this.city = '';
    this.page =  'allDjs';
  }

  selectGenre() {
    this.getprofileArr2 = [];
    for(var  x = 0; x < this.DjProfiles.length; x++){
      if (this.commercial == this.DjProfiles[x].genre){
        this.getprofileArr2.push(this.DjProfiles[x])
       console.log(this.DjProfiles[x]);
      }
    }
  }

  selectGender() {
    this.getprofileArr2 = [];
    for(var  x = 0; x < this.DjProfiles.length; x++){
      if (this.deephouse == this.DjProfiles[x].gender){
        this.getprofileArr2.push(this.DjProfiles[x])
       console.log(this.DjProfiles[x]);
      }
    }
  }
  selectcity() {
    this.getprofileArr2 = [];
    for(var  x = 0; x < this.DjProfiles.length; x++){
      if (this.hiphop == this.DjProfiles[x].city){
        this.getprofileArr2.push(this.DjProfiles[x])
       console.log(this.DjProfiles[x]);
      }
    }
  }




  // AllSection() {
  //   this.database.retreiveDJs().then((data: any) => {
  //     this.DjProfiles = data;
  //     console.log(this.DjProfiles)
  //   }) 
  // }

  HouseSection() {
    this.database.houseDjs().then((data: any) => {
      this.houseDjs = data;
      console.log(this.houseDjs)
    })
  }


  HipHopSection() {
    this.database.HipHopDjs().then((data: any) => {
      console.log(data)
      this.hipHopDjs = data;
    })
  }

  DisplayInfor(x) {
    console.log(x);
    this.fullname = x.fullname;
    this.bio = x.bio;
    this.city = x.city;
    this.email = x.email;
    this.gender = x.gender;
    this.payment = x.payment;
    this.price = x.price;
    this.stagename = x.stagename
    this.img = x.img
    this.key = x.key
  }

  ViewProfile() {
    if(this.stagename !== '' && this.fullname !== ''){
      let obj = {
        fullname: this.fullname,
        bio: this.bio,
        city: this.city,
        email: this.email,
        gender: this.gender,
        payment: this.payment,
        price: this.price,
        stagename: this.stagename,
        img: this.img,
        key:this.key
      }
      ProfileArr[0]=(obj);
      
      console.log(ProfileArr)

      this.router.navigate(['/profile', {obj : obj}]);
      
      // console.log(this.obj)
    }else{
      this.err = 'true';
    }

  }

  // Event(x){
  //   this.router.navigate(['/events', {name:this.username, key:x}]);
  // }
  navigate(page: string) {
    this.router.navigate([`/${page}`]);
  }



}



