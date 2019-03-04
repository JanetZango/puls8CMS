import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import ProfileArr from '../../app/class';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  seg: string = 'profile';
  Profile = [];
  musicArr= new Array();
  CommentArr= new Array();
  temp = [];
  key;
  event: Observable<string | null>
  object: any;
  constructor(private route: ActivatedRoute, private router: Router, public getdata: DatabaseService) {

    // this.getdata.getComments().then((data)=>{
    //  console.log(data)
    // })
  }

  ngOnInit() {
    this.seg = 'profile';
    this.Profile = ProfileArr;
    this.object = ProfileArr[0];
    this.key = ProfileArr[0].key
    console.log(this.key)
    console.log(this.object);


    this.getdata.retrieveMusic(this.key).then((data:any) => {
      this.musicArr=data
      console.log(this.musicArr)
    })

    this.getdata.getComments(this.key).then((data:any)=>{
      this.CommentArr=data
      console.log(this.CommentArr)
    })

  
  }

  navigate(page: string) {
    this.router.navigate([`/${page}`]);
  }

  remove(){
    this.getdata.removeUser(this.key).then((data:any)=>{
      console.log(data)
      this.router.navigate(['/profile']);
    })
  }
}
