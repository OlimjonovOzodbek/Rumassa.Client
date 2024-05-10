import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss'
})
export class UserprofileComponent {
  decodedJWT:any
  name:string=""
  surname:string=""
  role:string=""
    constructor(){
      this.setUser()
    }
    setUser(){

      const token = localStorage.getItem("token");
      if (!token) {
          console.error("JWT token not found in localStorage");
          return;
      }
      
      try {
          this.decodedJWT = jwtDecode(token);
      
          // Handle the "name" claim
          if (this.decodedJWT && this.decodedJWT["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]) {
              this.name = this.decodedJWT["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
          } else {
              console.error("Name claim not found in decoded JWT");
          }
      
          // Handle the "surname" claim
          if (this.decodedJWT && this.decodedJWT["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"]) {
              this.surname = this.decodedJWT["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"];
          } else {
              console.error("Surname claim not found in decoded JWT");
          }
      
          // Handle the "role" claim
          if (this.decodedJWT && this.decodedJWT["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]) {
              this.role = this.decodedJWT["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
          } else {
              console.error("Role claim not found in decoded JWT");
          }
      } catch (error) {
          console.error("Error decoding JWT:", error);
      }
      
    }
}
