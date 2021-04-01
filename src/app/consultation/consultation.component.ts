import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from "@angular/router";
import {DatePipe} from '@angular/common';
import{HopitalService} from '../hopital.service';
import{Hopital} from '../hopital';
import { ConsultationService } from "../consultation.service";
import{Consultation} from '../consultation';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  hopital:Hopital[];


  dt:string;


  constructor(private formBuilder:FormBuilder,
              private _consultationService:ConsultationService,
              private _hopitalService:HopitalService,
              private router:Router,
              private dtp:DatePipe) {
this.dt = dtp.transform(Date.now(),'yyyy-MM-dd');
  }
  addForm:FormGroup;
  ngOnInit(){
    this.addForm=this.formBuilder.group({

   idp:['',[Validators.required,Validators.minLength(8)]],
   idm:['',[Validators.required]],
   idh:['',[Validators.required]],
   datec:['',[Validators.required]],
   maladie:['',[Validators.required,Validators.minLength(2)]],
   resume:['',[Validators.required,Validators.minLength(50)]]

    });

    this._hopitalService.getHopitaux().subscribe((data:Hopital[])=>{
     this.hopital=data;

    });
  }
  onSubmit(){
    //console.log(this.addForm.value);
    this._consultationService.createConsultation(this.addForm.value).subscribe(data => {
      this.router.navigateByUrl("/home/id" );
    });
  }
  ajout(){
    this.router.navigateByUrl("/home/id" );
  }

}
