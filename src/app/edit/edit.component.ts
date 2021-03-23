import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { PatientsService } from "../patients.service";
import{Patients} from '../patients';
import { Router ,Params,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
              private _patientsService:PatientsService,
              private router:Router,
              private routes:ActivatedRoute) {

  }

  addForm:FormGroup;
    ngOnInit(){
      const routeParams=this.routes.snapshot.params;

   this.addForm=this.formBuilder.group({
     sId:[''],
     nom:['',[Validators.required,Validators.minLength(2)]],
     prenom:['',[Validators.required,Validators.minLength(2)]],
     dateNais:['',[Validators.required]],
     age:['',[Validators.required,Validators.minLength(1)]],
     poids:['',[Validators.required,Validators.minLength(1)]],
     taille:['',[Validators.required,Validators.minLength(2)]],
     sexe:['',[Validators.required,Validators.minLength(1)]],
      });
      //console.log(routeParams);
  this._patientsService.getPatientById(routeParams.id).
      subscribe((data:any)=>{

        this.addForm.patchValue(data);
      });

    }
update(){
this._patientsService.updatePatient(this.addForm.value).subscribe(()=>{
this.router.navigate(['/home/id']);
},
error => {
  alert(error);
});
}
}
