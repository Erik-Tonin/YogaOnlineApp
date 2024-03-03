import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, take } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class LoginService {

    public path = 'api/User';
  
    constructor(private http: HttpClient) { }


    public login(email: string, password: string): Observable<any> {
        return this.http.post(`${environment.URL_YogaOnline}/${this.path}/Login?email=${email}&password=${password}`, null).pipe(take(1));
      }
    
  }