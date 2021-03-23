import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
import{Consultation} from '../consultation';
import{Users} from '../users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mdc:any="../assets/images/medecine.jpg"
  addForm:FormGroup;
users:Users[];
_id:string
constructor(private formBuilder:FormBuilder,
            private _loginService:LoginService,
            private router:Router) { }

  ngOnInit() {
    this.addForm=this.formBuilder.group({

   username:['',[Validators.required]],
   mdp:['',[Validators.required]],
    });
  }
conect(){
  //console.log(this.addForm.value);
  this._loginService.authenticate(this.addForm.value.username,
    this.addForm.value.mdp).subscribe((data:Users[]) => {
  //console.log(data[0].username)
this.users=data
this._id=this.users[0].username
   //return this.data[0].username

     this.router.navigateByUrl('/home/'+this._id);


  }
);
//console.log(this.data[0].username)
}
/*oui(){
  let x:boolean=false
  if(this.users[0].username=="non"){
    x=true
    this.router.navigateByUrl("/login")
  }
  else{
    x=false
  }
  return x
}*/
}
