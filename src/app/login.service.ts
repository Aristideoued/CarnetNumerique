import { Injectable } from '@angular/core';
import{Users} from './users';
import{HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl:string='http://localhost:8888/Carnet'
    constructor(private http:HttpClient) { }


  authenticate(username:string,mdp:string){
    return this.http.post<any>
    (this.apiUrl+'/authenticate.php',{username,mdp}
  ).pipe(map(Users => {
    return Users;
  }));

  //console.log(this.medecin)
  }
}
