import { Component, OnInit } from '@angular/core';
import{ConsultationService} from '../consultation.service';
import{Consultation} from '../consultation';
import{MedecinService} from '../medecin.service';
import{Medecin} from '../medecin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

zero:number
vide:string=""
  medecinData={
     labels:[],
     datasets:[ ]
      };

      maladieData={
        labels:[],
        datasets:[ ]
         };

    constructor(private _consultationService:ConsultationService,private _medecinService:MedecinService) { }

    ngOnInit(){

         const nombre={
           label:"nombre de medecins",
           data:[],
           backgroundColor:'rgba(0, 230, 64, 1)',

            borderColor:'rgb(0,255,0)',
            borderWidth: 2
         };

/*this.zero=0
this.vide=" "
this.medecinData.labels.push(this.vide)*/
    //nombre.data.push(this.zero)
         this._medecinService.getcount().subscribe(list=>list.forEach(medecin =>{
           this.medecinData.labels.push(medecin.nomh);
           nombre.data.push(medecin.cpt);

         } ));

         this.medecinData.datasets.push(nombre);

         const nbcons={
           label:"Nombre de consultations",
           data:[],
           backgroundColor:'rgba(240, 52, 52, 1)',
            borderColor:'rgb(255,99,132)',
            borderWidth: 2
         };
   /*nbcons.data.push(this.zero)
   this.maladieData.labels.push(this.vide)*/
         this._consultationService.getcount().subscribe(list=>list.forEach(cons =>{
           this.maladieData.labels.push(cons.maladie);
           nbcons.data.push(cons.cpte);

         } ));
          this.maladieData.datasets.push(nbcons);
  }

}
