import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { PatientsService } from "../patients.service";
import{Patients} from '../patients';
import { Router } from "@angular/router";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
patients:Patients[];
bool:boolean=false;
  constructor(private formBuilder:FormBuilder,
              private _patientsService:PatientsService,
              private router:Router) {

  }
addForm:FormGroup;
  ngOnInit(){
    this.addForm=this.formBuilder.group({

   nom:['',[Validators.required,Validators.minLength(2)]],
   prenom:['',[Validators.required,Validators.minLength(2)]],
   dateNais:['',[Validators.required]],
   age:['',[Validators.required,Validators.minLength(1)]],
   poids:['',[Validators.required,Validators.minLength(1)]],
   taille:['',[Validators.required,Validators.minLength(2)]],
   sexe:['',[Validators.required,Validators.minLength(1)]],
    });
  }
  onSubmit(){
    //console.log(this.addForm.value);
    this._patientsService.createPatient(this.addForm.value).subscribe((data:Patients[]) => {
      this.patients=data;
      this.bool=true;
      //this.router.navigate(['/home/id']);
    });
  }

}
