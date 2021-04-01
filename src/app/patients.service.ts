import { Injectable } from '@angular/core';
import{Patients} from './patients';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http:HttpClient) {
  }

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'mon-jeton'
    })}
    apiUrl:string='http://localhost:8888/Carnet'
  ajouterMaClasse (id: string): Observable<Patients> {
   return this.http.post<Patients>(this.apiUrl+'/getPatientById.php?id='+ id, this.httpOptions)

  }


  getPatients(){
    return this.http.get<Patients[]>(this.apiUrl+'/list.php');
  }
  deletePatient(id:string){

    return this.http.delete<Patients[]>
    (this.apiUrl+'/delete.php?id='+id);

  }
  createPatient(patient:Patients){
    return this.http.post(this.apiUrl+'/ajouter.php',patient);
  }
  logout(callback){
   return callback && callback();
  }
  getPatientById(id:string){
    return this.http.post<Patients[]>(this.apiUrl+'/getPatientById.php',{id});
  }
  updatePatient(patient:Patients){

    return this.http.put(this.apiUrl+'/update.php'+'?id=' + patient.sId,patient);
  }
  updateResume(patient:Patients){
return this.http.put(this.apiUrl+'/updateResume.php',patient);
  }
}
