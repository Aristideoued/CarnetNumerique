/*import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import{ConsultationService} from '../consultation.service';
import{Consultation} from '../consultation';
import { CommonModule } from "@angular/common";

import{Patients} from '../patients';
import { SuivieComponent } from '../suivie/suivie.component';
import { PatientsService } from "../patients.service";
import { BrowserModule } from '@angular/platform-browser';
import { Router ,Params,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-viewsuivie',
  templateUrl: './viewsuivie.component.html',
  styleUrls: ['./viewsuivie.component.css']
})
export class ViewsuivieComponent implements OnInit {
consultation:Consultation[];
consultations=new Consultation();
_id:number;
suivi: SuivieComponent;
  constructor(private _consultationService:ConsultationService,private router:Router) { }

  ngOnInit(){
   this._consultationService.getSuive(this.suivi.addForm.value).subscribe((data:Consultation[])=>{
    this.consultation=data;
   });
  }


}*/
