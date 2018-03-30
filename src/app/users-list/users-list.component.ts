import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {

    this.productService.getUsers().subscribe( user => console.log(user));
  }

}
