import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hasRoleUser(){
    /*  let hasRole:boolean=false
      this.principal.authorities.forEach(item => {
        if(item.authority=='ROLE_USER'){
          hasRole=true;

        }

      });
      return hasRole;

    */}

    hasRoleAdmin(){
    /*  let hasRole:boolean=false
      this.principal.authorities.forEach(item => {
        if(item.authority=='ROLE_ADMIN'){
          hasRole=true;

        }

      });
      return hasRole;

  */  }

}
