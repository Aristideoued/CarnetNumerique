import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { ConsultationService } from "../consultation.service";
import{Consultation} from '../consultation';

@Component({
  selector: 'app-suivie',
  templateUrl: './suivie.component.html',
  styleUrls: ['./suivie.component.css']
})
export class SuivieComponent implements OnInit {
  addForm:FormGroup;
  _id:string;
  _idm:string;
  _maladie:string;
  clk:boolean=false;
  mdc:boolean=false;
    consultation:Consultation[];
  constructor(private formBuilder:FormBuilder,
              private _consultationService:ConsultationService,
              private router:Router) { }

  ngOnInit() {
    this.addForm=this.formBuilder.group({

   idp:['',[Validators.required,Validators.minLength(8)]],
   idm:['',[Validators.required]],


   maladie:['',[Validators.required,Validators.minLength(2)]],


    });
  }

  onSubmit(){
  //console.log(this.addForm.value.idm);
    this._consultationService.getSuive(
      this.addForm.value.idm,this.addForm.value.idp,
      this.addForm.value.maladie).subscribe((data:Consultation[])=> {
      //this.router.navigateByUrl("/home/(homeOutlet:viewsuivie)" );
      this.consultation=data;
      // console.log(this.consultation[0])
      this.clk=true;
    });
  }
  edit(consultation:Consultation){
   this._id=consultation.sId+" "+consultation.medecin+" "+consultation.maladie;
   this.router.navigateByUrl("/home/id/(homeOutlet:editresume/"+this._id+")" );

  }

  ajout(){
    this.router.navigateByUrl("/home/id" );
  }
}
