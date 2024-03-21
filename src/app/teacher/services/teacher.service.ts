import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, take, map } from "rxjs";
import { environment } from "src/environments/environment";
import { Teacher } from "../models/teacher.model";


@Injectable({
    providedIn: 'root'
})

export class TeacherService {

    public path = 'api/Teacher';
  
    constructor(private http: HttpClient) { }


    public getAllSegmentation(): Observable<Array<Teacher>> {
        return this.http.get<Array<Teacher>>(`${environment.URL_YogaOnline}/${this.path}/GetAllSegmentation`); 
    }     
}