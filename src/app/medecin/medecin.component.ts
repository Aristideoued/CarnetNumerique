import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { MedecinService } from "../medecin.service";
import{Medecin} from '../medecin';
import { MustMatch } from '../pass.validator';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import{HopitalService} from '../hopital.service';
import{Hopital} from '../hopital';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
  /*mobNumberPattern = "^\d{2}-\d{3}-\d{4}$";*/
  Ime:any="../assets/images/medecin.jpg"
  medecins:Medecin[];
  hopital:Hopital[];
  medecin = new Medecin();
  constructor(private formBuilder:FormBuilder,
              private _medecinService:MedecinService,
              private _hopitalService:HopitalService,
              private router:Router) {

  }
addForm:FormGroup;
  ngOnInit(){
    this.addForm=this.formBuilder.group({
   identifiant:['',[Validators.required,Validators.maxLength(255)]],
   nom_m:['',[Validators.required,Validators.minLength(2)]],
   prenom_m:['',[Validators.required,Validators.minLength(2)]],
   mobileNumber: ['', [Validators.required ]],
   hopital:['',[Validators.required]],
   mdp_1:['',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]],
   mdp_2:['',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]]

 }, {
            validator: MustMatch('mdp_1', 'mdp_2')
        });

        this._hopitalService.getHopitaux().subscribe((data:Hopital[])=>{
         this.hopital=data;

        });

}


  get f() {
    return this.addForm.controls;

  }
  onSubmit(){
    //console.log(this.addForm.value);
    this._medecinService.createMedecin(this.addForm.value).subscribe(data => {
      this.router.navigate(['/home/id']);
    });
  }


}
