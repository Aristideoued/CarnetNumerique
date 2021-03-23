import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import{HopitalService} from '../hopital.service';
import{Hopital} from '../hopital';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { Router } from "@angular/router";

@Component({
  selector: 'app-viewhopital',
  templateUrl: './viewhopital.component.html',
  styleUrls: ['./viewhopital.component.css']
})
export class ViewhopitalComponent implements OnInit {

  hopital:Hopital[];
  _id:number;
  constructor(private _hopitalService:HopitalService,private router:Router) { }

  ngOnInit(){
   this._hopitalService.getHopitaux().subscribe((data:Hopital[])=>{
    this.hopital=data;

   });
  }
  delete(hopital:Hopital):void{
   this._hopitalService.deleteHopital(hopital.id)
   .subscribe(data=>{
     this.hopital=this.hopital.filter(u => u !== hopital);
   });

  }

  edit(hopital:Hopital){
   this._id=hopital.id;
   this.router.navigateByUrl("/home/(homeOutlet:edithopital/"+this._id+")" );

  }
  ajout(){
    this.router.navigateByUrl("/home/id/(homeOutlet:hopital)" );
  }

}
