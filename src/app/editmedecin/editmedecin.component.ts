import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { MedecinService } from "../medecin.service";
import{Medecin} from '../medecin';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import{HopitalService} from '../hopital.service';
import{Hopital} from '../hopital';
import { MustMatch } from '../pass.validator';
import { Router ,Params,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-editmedecin',
  templateUrl: './editmedecin.component.html',
  styleUrls: ['./editmedecin.component.css']
})
export class EditmedecinComponent implements OnInit {
medecin=new Medecin();
medecins:Medecin[];
  hopital:Hopital[];
mobNumberPattern = "^((\\+226-?)|0)?[0-9]{10}$";
  constructor(private formBuilder:FormBuilder,
              private _medecinService:MedecinService,
              private _hopitalService:HopitalService,
              private router:Router,
              private routes:ActivatedRoute) {

  }

  addForm:FormGroup;
    ngOnInit(){
      const routeParams=this.routes.snapshot.params;





   this.addForm=this.formBuilder.group({

     identifiant:['',[Validators.required,Validators.maxLength(15)]],
     nom:['',[Validators.required,Validators.minLength(2)]],
     prenom:['',[Validators.required,Validators.minLength(2)]],
     mobileNumber: ['', [Validators.required, Validators.pattern("([0-9]{2} ){3}[0-9]{2}")]],
     hopital:['',[Validators.required]],
     mdp_1:['',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]],
     mdp_2:['',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]]

   }, {
              validator: MustMatch('mdp_1', 'mdp_2')
          });

  this._medecinService.getMedecinById(routeParams.id).
      subscribe((data:any)=>{
        this.addForm.patchValue(data);
      });
      this._hopitalService.getHopitaux().subscribe((data:Hopital[])=>{
       this.hopital=data;

      });
    }
    get f() { return this.addForm.controls; }
update(){
this._medecinService.updateMedecin(this.addForm.value).subscribe(()=>{
this.router.navigateByUrl("/home/(homeOutlet:viewmedecin)");
},
error => {
  alert(error);
});
}

}
