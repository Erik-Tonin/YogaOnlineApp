import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, take } from "rxjs";
import { User } from "src/app/user/models/user.model";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class HomeService {

    public path = 'api/User';
  
    constructor(private http: HttpClient) { }

    public getByEmail(email: string):  Observable<User>{
        return this.http.get<User>(`${environment.URL_YogaOnline}/${this.path}/getByEmail?email=${email}`);
    }
    
  }