import { Injectable } from '@angular/core';
import{Medecin} from './medecin';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http:HttpClient) { }
  getMedecin(){
    return this.http.get<Medecin[]>('http://localhost:8888/Carnet/listMedecin.php');
  }
  deletePatient(id:string){
    return this.http.delete<Medecin[]>('http://localhost:8888/Carnet/deleteMedecin.php?id='+ id);

  }
  createMedecin(medecin:Medecin){
    return this.http.post('http://localhost:8888/Carnet/ajouterMedecin.php',medecin);
  }

  getMedecinById(id:string){
    return this.http.get<Medecin[]>('http://localhost:8888/Carnet/getMedecinById.php?id='+ id);
  }
  updateMedecin(medecin:Medecin){

    return this.http.put('http://localhost:8888/Carnet/updateMedecin.php' + '?id=' + medecin.identifiant,medecin);
  }
  getcount(){
  return this.http.get<Medecin[]>('http://localhost:8888/Carnet/getcountm.php');
  }
}
