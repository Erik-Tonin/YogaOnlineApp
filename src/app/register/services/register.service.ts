import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { environment } from "src/environments/environment";
import { Register } from "../models/register.models";


@Injectable({
    providedIn: 'root'
})

export class RegisterService {

    public path = 'api/User';
  
    constructor(private http: HttpClient) { }


    public register(userForm: any): Observable<any> {
        return this.http.post(`${environment.URL_YogaOnline}/${this.path}/Register`, userForm).pipe(take(1));
    }
}