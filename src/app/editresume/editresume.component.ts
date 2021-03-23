import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { ConsultationService } from "../consultation.service";
import { PatientsService } from "../patients.service";
import{Patients} from '../patients';
import { Router ,Params,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editresume',
  templateUrl: './editresume.component.html',
  styleUrls: ['./editresume.component.css']
})
export class EditresumeComponent implements OnInit {
addForm:FormGroup;
idp:string
idm:string
maladie:string
constructor(private formBuilder:FormBuilder,
            private _consultationService:ConsultationService,
            private _patientsService:PatientsService,
            private router:Router,
            private routes:ActivatedRoute) {

}

  ngOnInit(){
    const routeParams=this.routes.snapshot.params;

 this.addForm=this.formBuilder.group({
   sId:[''],
   nom:[''],
   prenom:[''],
   maladie:[''],
   resume:['',[Validators.required,Validators.minLength(50)]],
   medecin:[''],

    });
    //console.log(routeParams);
    let t=routeParams.id;
    let tab=t.split(" ");

  this.idp=tab[0];
  this.idm=tab[1];
  this.maladie=tab[2];
this._consultationService.getSuive(this.idm,this.idp,this.maladie).
    subscribe((data:any)=>{
      //console.log(data[0])
      this.addForm.patchValue(data[0]);
    });

  }
updateResum(){
  this._patientsService.updateResume(this.addForm.value).subscribe(()=>{
 alert("Suivie modifié avec succès")
  this.router.navigateByUrl("/home/id");
  },
  error => {
    alert(error);
  });
  }
  ajout(){
    this.router.navigateByUrl("/home/id" );
  }
}
