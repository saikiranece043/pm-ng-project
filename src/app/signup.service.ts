import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Usercreds } from './model/usercreds';
import { HttpErrorResponse,HttpClient} from '@angular/common/http';
@Injectable()
export class SignupService {

  constructor(private _http:Http) { }

   url:string = "http://localhost:8080/usersignup"

  handleError(err:HttpErrorResponse){
    return Observable.throw(err);
  }

  handleres(res:Response){
       let body= res.text();
       console.log(body);
       return body || {} ;
  }


createUser(user:Usercreds):Observable<any>{
 
 let body = JSON.stringify(user);
 let headers = new Headers({ "content-type":"application/json"});
 let options = new RequestOptions({"headers":headers});
  return this._http.post(this.url,body,options).
                           map(this.handleres).
                           catch(this.handleError);

}

getUsers():Observable<any>{
 return this._http.get(this.url)
}

  

}
