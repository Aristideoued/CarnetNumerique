import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import{PatientsService} from '../patients.service';
import{Patients} from '../patients';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   patients:Patients[];
   _id:string;
  constructor(private _patientsService:PatientsService,private router:Router) { }

  ngOnInit(){
    this._patientsService.getPatients().subscribe((data:Patients[])=>{
     this.patients=data;

    });
  }
  delete(patients:Patients):void{
    this._patientsService.deletePatient(patients.sId)
    .subscribe(data=>{
      this.patients=this.patients.filter(u => u !== patients);
    });

  }

  edit(patients:Patients){
    this._id=patients.sId;
    this.router.navigateByUrl("/home/id/(homeOutlet:edit/"+this._id+")" );

  }

}
