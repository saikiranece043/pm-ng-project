import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user';

@Injectable()
export class ProductService {

  constructor(private _http:HttpClient) { }

private _url='./api/products.json';

getProducts():Observable<IProduct[]>{

    return this._http.get<IProduct[]>(this._url)
                                          .do( data => console.log(data))
                                          .catch(this.handleError);
}


getUsers():Observable<IUser[]>{
  return this._http.get<IUser[]>('https://api.randomuser.me/')
                      .do(d => console.log(d));
}

private handleError(err:HttpErrorResponse){
 console.log(err);
 return Observable.throw(err.message);
  
}


}
