import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user';
import 'rxjs/Rx'
import {Http,Response, RequestOptions,Headers} from '@angular/http'
@Injectable()
export class ProductService {

  constructor(private _http:Http,private httpclient:HttpClient) { }

private _url='./api/products.json';


getProducts():Observable<IProduct[]>{

    return this.httpclient.get<IProduct[]>(this._url);
}




private handleError(err:HttpErrorResponse){
 console.log(err);
 return Observable.throw(err.message);
  
}


extractdata(res:Response){
  let body=res.json();
  return body.results || {} ;
}

getresults(usersno):Observable<any>{

 if(!usersno  || usersno == null){
   usersno=5;
 } 
 let url='https://randomuser.me/api/?results='+usersno;
 console.log(url);
  return this._http.get(url).map(this.extractdata);
}


}
