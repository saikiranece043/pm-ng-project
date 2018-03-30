import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConverToSpacesPipe } from './conver-to-spaces.pipe';
import { UsersListComponent } from './users-list/users-list.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverToSpacesPipe,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path : 'products' , component : ProductListComponent},
                          { path  : 'home' ,component : UsersListComponent},
                          { path : '' , redirectTo : '/products' , pathMatch : 'full'}])
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
