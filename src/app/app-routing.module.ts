import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { ViewmedecinComponent } from './viewmedecin/viewmedecin.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ViewhopitalComponent } from './viewhopital/viewhopital.component';
import { EdithopitalComponent } from './edithopital/edithopital.component';
import { HopitalComponent } from './hopital/hopital.component';
import { MedecinComponent } from './medecin/medecin.component';
import {  ConsultationComponent} from "./consultation/consultation.component";
import {  SuivieComponent} from "./suivie/suivie.component";
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ViewconsultationComponent } from './viewconsultation/viewconsultation.component';
import { EditresumeComponent } from './editresume/editresume.component';

import{HttpClientModule} from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { DossierComponent } from './dossier/dossier.component';
import { NavbarComponent } from './navbar/navbar.component';
export const routes: Routes = [

  {
     path:'home/:id',
     component:HomeComponent,
     children:[
           {
             path:'',
             component:DashboardComponent,outlet:'homeOutlet',
            },

            {
              path:'view',outlet:'homeOutlet',
              component:ViewComponent

            },
            {
              path:'dashboard',outlet:'homeOutlet',
              component:DashboardComponent

            },
            {
              path:'viewhopital',outlet:'homeOutlet',
              component:ViewhopitalComponent

            },

            {
              path:'edithopital/:id',outlet:'homeOutlet',
              component:EdithopitalComponent

            },
            {
              path:'editresume/:id',outlet:'homeOutlet',
              component:EditresumeComponent

            },
            {
              path:'hopital',outlet:'homeOutlet',
              component:HopitalComponent

            },
            {
              path:'suivie',outlet:'homeOutlet',
              component:SuivieComponent

            },

            {
              path:'add',
              component:AddComponent,outlet:'homeOutlet',

            },
            {
              path:'edit/:id',
              component:EditComponent,outlet:'homeOutlet'

           },
           {path:'dossier/:id',
           component:DossierComponent,outlet:'homeOutlet'},

           {path:'consultation',
           component:ConsultationComponent,outlet:'homeOutlet'},

        ]},

        {path:'login',
        component:LoginComponent},
        {path:'medecin',
        component:MedecinComponent},

        {path:'viewc',
        component:ViewconsultationComponent},
        {path:'viewmedecin',
        component:ViewmedecinComponent},


        {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true}),HttpClientModule,BrowserModule,FormsModule,  ReactiveFormsModule],
  exports: [RouterModule],
  providers:[HomeComponent]
})
export class AppRoutingModule { }
