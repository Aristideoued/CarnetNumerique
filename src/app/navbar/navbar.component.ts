import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { PatientsService } from "../patients.service";
import { Patients } from "../patients";
import{ConsultationService} from '../consultation.service';
import{Consultation} from '../consultation';
import { LoginService } from "../login.service";
import { HomeComponent } from '../home/home.component';
import { Router ,Params,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Image:any="../assets/images/logo1.jpg"
  Image_1:any="../assets/images/drapog.gif"
  addForm:FormGroup;
  _id:string;



  consultation:Consultation[];

  @Input()
  showSideBar:boolean;

  @Output()
  showSideBarChange:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private _patientsService:PatientsService,
              private _consultationService:ConsultationService,
              private _loginService:LoginService
            ,private _home:HomeComponent,
            private routes:ActivatedRoute) { }

  ngOnInit(){



    this.addForm=this.formBuilder.group({

   patient:['',[Validators.required,Validators.minLength(8)]]});
  }

a(){


  let x:string
  let a:boolean=false
  x=this._home.id()
  if(x=="secretaire"){
    a=true
  }
  else{a=false}
  return a
}
d(){
  let d:boolean=false
  return d
}
b(){
  let y:string
 let b:boolean=false
 y=this._home.id()
 if(y=="admin"){
   b=true
 }
 else{b=false}
  return b
}
c(){
  let z:string
  let c:boolean=false
  z=this._home.id()
  if(z != "admin" && z != "secretaire"){
    c=true
  }
  else{c=false}
  return c
}
  afficherSideBar(){
    this.showSideBar=!this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }
  logout(){
  this._patientsService.logout(()=>{
    this.router.navigateByUrl('/login')
  });
    }
    search(){
      this._id=this.addForm.value;
      this.router.navigateByUrl("/home/id/(homeOutlet:dossier/"+this._id['patient']+")" );
      //sconsole.log(this._id['patient']);
    }
}
