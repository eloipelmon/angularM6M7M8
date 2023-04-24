import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServicioBD {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    postUser(user: any) {
        let url = "http://localhost:8080/users/";
        return this.http.post(url, user, this.httpOptions);
    }

    getUsers():Observable<any> {
        return this.http.get<any>("http://localhost:8080/users/");
    }

    deleteUser(id: any): Observable<any> {
        let url = "http://localhost:8080/users/" + id;
        return this.http.delete(url, this.httpOptions);
    }
    
    editUser(user: any,id:any): Observable<any> {
        let url = "http://localhost:8080/users/" + id;
        return this.http.put(url, user, this.httpOptions);
    }
}