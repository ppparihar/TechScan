import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
    
   }

   details(userId:String):Observable<any>{

     return this.http.get(`https://api.github.com/users/${userId}`);
   }

}
