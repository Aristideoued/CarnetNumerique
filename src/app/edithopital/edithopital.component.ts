import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { HopitalService } from "../hopital.service";
import{Hopital} from '../hopital';
import { Router ,Params,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-edithopital',
  templateUrl: './edithopital.component.html',
  styleUrls: ['./edithopital.component.css']
})
export class EdithopitalComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
              private _hopitalService:HopitalService,
              private router:Router,
              private routes:ActivatedRoute) {

  }

  addForm:FormGroup;
    ngOnInit(){
      const routeParams=this.routes.snapshot.params;





   this.addForm=this.formBuilder.group({

     id:[''],
     nomh:['',[Validators.required,Validators.minLength(2)]],
     province:['',[Validators.required,Validators.minLength(2)]],
     ville:['',[Validators.required,Validators.minLength(2)]]

      });

  this._hopitalService.getHopitalById(routeParams.id).
      subscribe((data:any)=>{
        this.addForm.patchValue(data);
      });

    }
update(){
this._hopitalService.updateHopital(this.addForm.value).subscribe(()=>{
this.router.navigateByUrl("/home/(homeOutlet:viewhopital)");
},
error => {
  alert(error);
});
}

}
