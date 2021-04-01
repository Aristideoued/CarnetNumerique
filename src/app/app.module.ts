import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from "angular2-chartjs";
import {DatePipe} from '@angular/common';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import{HttpClientModule} from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { EditComponent } from './edit/edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HopitalComponent } from './hopital/hopital.component';
import { ViewhopitalComponent } from './viewhopital/viewhopital.component';
import { EdithopitalComponent } from './edithopital/edithopital.component';
import { MedecinComponent } from './medecin/medecin.component';
import { EditmedecinComponent } from './editmedecin/editmedecin.component';
import { ViewmedecinComponent } from './viewmedecin/viewmedecin.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ViewconsultationComponent } from './viewconsultation/viewconsultation.component';
import { EditconsultationComponent } from './editconsultation/editconsultation.component';
import { LoginComponent } from './login/login.component';
import { DossierComponent } from './dossier/dossier.component';
import { SuivieComponent } from './suivie/suivie.component';
import { EditresumeComponent } from './editresume/editresume.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MychartComponent } from './mychart/mychart.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EditComponent,
    HomeComponent,
    NavbarComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    HopitalComponent,
    ViewhopitalComponent,
    EdithopitalComponent,
    MedecinComponent,
    EditmedecinComponent,
    ViewmedecinComponent,
    ConsultationComponent,
    ViewconsultationComponent,
    EditconsultationComponent,
    LoginComponent,
    DossierComponent,
    SuivieComponent,
    EditresumeComponent,
    DashboardComponent,
    MychartComponent,


  ],
  imports: [CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
