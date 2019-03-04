import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase'; 
import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { HomeComponent } from './home/home.component';
import {Route,RouterModule,Routes} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

  var config = {
    apiKey: "AIzaSyCI9c63kFGLwA6obewlXKUgaYuJa-dIyp8",
    authDomain: "newpuls8database.firebaseapp.com",
    databaseURL: "https://newpuls8database.firebaseio.com",
    projectId: "newpuls8database",
    storageBucket: "newpuls8database.appspot.com",
    messagingSenderId: "649926660397"
};
firebase.initializeApp(config)

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'app', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register' , component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
