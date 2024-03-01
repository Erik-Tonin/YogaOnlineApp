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
  }