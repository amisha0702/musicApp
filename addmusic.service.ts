import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddmusicService {

  
  url="http://localhost:8080"

  
  constructor(private http:HttpClient) { }
  //calling server

  generateToken( credentials:any)
  {
    //token generate
   return this.http.post("http://localhost:8080/music",credentials)
  }
  //for login
  // loginUser(token: string)
  // {
  //   localStorage.setItem("token",token)
  //   return true;
  // }

  // isLoggedIn()
  // {
  //   let token=localStorage.getItem("token");
  //   if(token==undefined || token =='' || token==null)
  //   {
  //     return false;
  //   }
  //   else
  //   {
  //     return true;
  //   }

  //  }
  //   logout()
  //   {
  //     localStorage.removeItem('token');
  //     return true;
  //   }

  //   getToken()
  //   {
  //     return localStorage.getItem("token")
  //   }
  
}

