import { Injectable } from '@angular/core';
import{Consultation} from './consultation';
import{HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
apiUrl:string='http://localhost:8889/Carnet'
  constructor(private http:HttpClient) { }
  getConsultation(){
    return this.http.get<Consultation[]>(this.apiUrl+'/listC.php');
  }
  deleteConsultation(id:number){
    return this.http.delete<Consultation[]>(this.apiUrl+'/deleteC.php?id='+ id);

  }
  createConsultation(consultation:Consultation){
    return this.http.post(this.apiUrl+'/ajouterC.php',consultation);
  }
  getSuive(idm:string,idp:string,maladie:string){
    /*const paramsObj = {
      idm: idm || undefined,
      idp: idp || undefined,
      maladie: maladie || undefined
   };
   const params = new HttpParams({ fromObject: paramsObj });

    let params = new HttpParams();

    params = params.append('idm', idm);
    params = params.append('idp', idp);
    params = params.append('maladie', maladie );*/

      return this.http.post<any>
      (this.apiUrl+'/listSuivie.php',{idm,idp,maladie}
    ).pipe(map(Consultation => {
      return Consultation;
    }));
  }
  getPCById(id:string){
    return this.http.get<Consultation[]>(this.apiUrl+'/CP.php?id='+ id);
  }
  getConsultationById(id:number){
    return this.http.get<Consultation[]>(this.apiUrl+'/getCById.php?id='+ id);
  }
  updateConsultation(consultation:Consultation){

    return this.http.put(this.apiUrl+'/updateC.php' + '?id=' + consultation.idc,consultation);
  }
  getcount(){
  return this.http.get<Consultation[]>('http://localhost:8888/Carnet/getcountp.php');
  }

}
