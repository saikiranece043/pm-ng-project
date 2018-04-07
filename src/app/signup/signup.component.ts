import { Component, OnInit } from '@angular/core';
import { Usercreds } from '../model/usercreds';
import { UsersListComponent } from '../users-list/users-list.component';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  usercreds:Usercreds;
  response='';

  users:Usercreds[]=[];

  constructor(private _signup:SignupService) { 

  this.usercreds=new Usercreds("","","");
  }

  ngOnInit() {

  

  }


  createUser(){
         
    this._signup.createUser(this.usercreds).subscribe(d => {console.log(d); this.response=d;},
                                                       err => console.log(err) );
  }

  
}
