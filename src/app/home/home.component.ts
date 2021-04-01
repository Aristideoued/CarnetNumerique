import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {LoginComponent  } from "../login/login.component";
import { LoginService } from "../login.service";
import { Router ,Params,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showHideSideBar:boolean=true;
    dt:string;
    Image:any="../assets/images/logo1.jpg"
    Image_1:any="../assets/images/drapog.gif"


      constructor(private dtp:DatePipe,
                  private router:Router,
                  private routes:ActivatedRoute
                ){
      this.dt = dtp.transform(Date.now(),'yyyy-MM-dd HH:mm');
    }
 ngOnInit(){


 }
 onShowSideBarChange(showHideSideBar){
   this.showHideSideBar=showHideSideBar;  }
   id(){
     const routeParams=this.routes.snapshot.params;
     return routeParams.id
     }

}
