import { Injectable } from '@angular/core';
import{Hopital} from './hopital';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  constructor(private http:HttpClient) { }
  createHopital(hopital:Hopital){
    return this.http.post('http://localhost:8888/Carnet/ajouterHopital.php',hopital);
  }
  getHopitaux(){
    return this.http.get<Hopital[]>('http://localhost:8888/Carnet/listHopitaux.php');
  }
  deleteHopital(id:number){
    return this.http.delete<Hopital[]>('http://localhost:8888/Carnet/deleteHopital.php?id='+ id);

  }
  getHopitalById(id:number){
    return this.http.get<Hopital[]>('http://localhost:8888/Carnet/getHopitalById.php?id='+ id);
  }
  updateHopital(hopital:Hopital){

    return this.http.put('http://localhost:8888/Carnet/updateHopital.php' + '?id=' + hopital.id,hopital);

  }
}
