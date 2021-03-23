import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import{ConsultationService} from '../consultation.service';
import{Consultation} from '../consultation';
import { CommonModule } from "@angular/common";

import{Patients} from '../patients';
import { NavbarComponent } from '../navbar/navbar.component';
import { PatientsService } from "../patients.service";
import { BrowserModule } from '@angular/platform-browser';
import { Router ,Params,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {


    consultation:Consultation[];
    patients:Patients[];
    _id:string;
    constructor(private _patientsService:PatientsService,
                private _consultationService:ConsultationService,
                private router:Router,
                private routes:ActivatedRoute) { }

    ngOnInit(){
    const routeParams=this.routes.snapshot.params;
     this._consultationService.getPCById(routeParams.id).subscribe((data:Consultation[])=>{
      this.consultation=data;
     });
     //console.log(consultation[0]);
    }

    ajout(){
      this.router.navigateByUrl("/home/id" );
    }

    /*delete(patients:Patients):void{
      this._patientsService.deletePatient(patients.sId)
      .subscribe(data=>{
        this.patients=this.patients.filter(u => u !== patients);
      });

    }*/

    edit(patients:Patients){
      this._id=patients.sId;
      this.router.navigateByUrl("/home/(homeOutlet:edit/"+this._id+")" );

    }

}
