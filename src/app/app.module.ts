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
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup.service';
import {HttpModule} from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverToSpacesPipe,
    UsersListComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([{ path : 'products' , component : ProductListComponent},
                          { path  : 'home' ,component : UsersListComponent},
                          {path : 'signup', component: SignupComponent},
                          { path : '' , redirectTo : '/products' , pathMatch : 'full'}])
  ],
  providers: [ ProductService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
