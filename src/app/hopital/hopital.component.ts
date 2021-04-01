import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { HopitalService } from "../hopital.service";
import{Hopital} from '../hopital';
import { Router } from "@angular/router";

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.css']
})
export class HopitalComponent implements OnInit {


  constructor(private formBuilder:FormBuilder,
              private _hopitalService:HopitalService,
              private router:Router) {

  }
addForm:FormGroup;
  ngOnInit(){
    this.addForm=this.formBuilder.group({

   nomh:['',[Validators.required,Validators.minLength(2)]],
   province:['',[Validators.required,Validators.minLength(2)]],
   ville:['',[Validators.required,Validators.minLength(2)]]

    });
  }


onSubmit(){
  this._hopitalService.createHopital(this.addForm.value).subscribe(data => {
    this.router.navigateByUrl("/home/id/(homeOutlet:viewhopital)");
  });
}

}
