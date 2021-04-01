import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import{MedecinService} from '../medecin.service';
import{Medecin} from '../medecin';
import{ConsultationService} from '../consultation.service';
import{Consultation} from '../consultation';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { Router } from "@angular/router";

@Component({
  selector: 'app-viewmedecin',
  templateUrl: './viewmedecin.component.html',
  styleUrls: ['./viewmedecin.component.css']
})
export class ViewmedecinComponent implements OnInit {

  medecin:Medecin[];
    consultation:Consultation[];
  _identfiant:string;
 constructor(private _consultationService:ConsultationService,private _medecinService:MedecinService,private router:Router) { }

 ngOnInit(){
   /*this._medecinService.getMedecin().subscribe((data:Medecin[])=>{
    this.medecin=data;

  });*/
   this._consultationService.getcount().subscribe((data:Consultation[])=>{
    this.consultation=data;

   });
 }
 delete(medecin:Medecin):void{
   this._medecinService.deletePatient(medecin.identifiant)
   .subscribe(data=>{
     this.medecin=this.medecin.filter(u => u !== medecin);
   });

 }

 edit(medecin:Medecin){
   this._identfiant=medecin.identifiant;
   this.router.navigateByUrl("/home/id/(homeOutlet:editmedecin/"+this._identfiant+")" );

 }


}
