import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

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

  products: IProduct[] = [{
    productName: "Hammer",
    productCode: "abc-234",
    productAvailable: "20-10-2018",
    productPrice: "20.89",
    productRating: "4",
    productImage: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
  },
  {
    productName: "Axe",
    productCode: "bcd-888",
    productAvailable: "20-10-2018",
    productPrice: "20.89",
    productRating: "4",
    productImage: "https://homepages.cae.wisc.edu/~ece533/images/girl.png"
  },
  {
    productName: "Grater",
    productCode: "zxy-237",
    productAvailable: "20-10-2018",
    productPrice: "20.89",
    productRating: "4",
    productImage: "https://homepages.cae.wisc.edu/~ece533/images/cat.png"
  }

  ]
  constructor() { 
    this.filteredProducts=this.products;
  }

  ngOnInit() {
  }


  toggleImage(): void {
    this.imageStatus = !this.imageStatus;
  }

}
