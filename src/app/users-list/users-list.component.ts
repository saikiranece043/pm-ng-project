import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IUser } from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {


  usersno;


  clients = [];
  constructor(private productService:ProductService) { 

  }


  loadUsers(){
    this.productService.getresults(this.usersno).subscribe( d => {
      this.clients=d;
     
    });
  }

  ngOnInit() {

  
    this.productService.getresults(this.usersno).subscribe( d => {
        this.clients=d;
       
      });
   

  
  }

}
