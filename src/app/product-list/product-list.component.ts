import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  width: number = 60;
  _filter: string = '';
  title: string = "Products List";
  imageStatus: boolean = false;
  filteredProducts: IProduct[];
  products: IProduct[];


  
    get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredProducts = this.setProducts(value)

    console.log("Setter method called" + this.filteredProducts);
  }

  setProducts(value:string): IProduct[] {
    return this.products.filter(p => p.productName.toLowerCase().indexOf(value.toLowerCase()) != -1);
  }

  
  constructor(private productService:ProductService) { 
    
  }

  ngOnInit() {
    this.productService.getProducts().subscribe( x => {
      this.products =x;
      this.filteredProducts=this.products;
    }, err => console.log("Error in the component subscribing to Observable"));
  }


  toggleImage(): void {
    this.imageStatus = !this.imageStatus;
  }

}
