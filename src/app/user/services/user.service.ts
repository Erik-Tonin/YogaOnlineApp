import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, take } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    public path = 'api/User';
  
    constructor(private http: HttpClient) { }
  
    public register(user: User): Observable<any> {
      const url = `${environment.URL_YogaOnline}/${this.path}/register`;
      return this.http.post(url, user);
    }

    public getAll(): Observable<Array<User>> {
      return this.http.get<Array<User>>(`${environment.URL_YogaOnline}/${this.path}/GetAll`); 
    }
  }