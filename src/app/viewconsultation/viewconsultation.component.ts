import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import{ConsultationService} from '../consultation.service';
import{Consultation} from '../consultation';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { Router } from "@angular/router";
@Component({
  selector: 'app-viewconsultation',
  templateUrl: './viewconsultation.component.html',
  styleUrls: ['./viewconsultation.component.css']
})
export class ViewconsultationComponent implements OnInit {

  consultation:Consultation[];
  _id:number;
  espace:string=" ";
  constructor(private _consultationService:ConsultationService,private router:Router) { }

  ngOnInit(){
   this._consultationService.getConsultation().subscribe((data:Consultation[])=>{
    this.consultation=data;
   });
  }
  delete(consultation:Consultation):void{
   this._consultationService.deleteConsultation(consultation.idc)
   .subscribe(data=>{
     this.consultation=this.consultation.filter(u => u !== consultation);
   });

  }

  edit(consultation:Consultation){
   this._id=consultation.idc;
   this.router.navigateByUrl("/home/(homeOutlet:editC/"+this._id+")" );

  }
  ajout(){
    this.router.navigateByUrl("/home/(homeOutlet:consultation)" );
  }


}
