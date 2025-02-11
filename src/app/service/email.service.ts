// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmailService {
//   private baseUrl:String="http://localhost:8282"
//   constructor(private http:HttpClient) { }
//   sendEmail(data:any){
//     // return this.http.post(`${this.baseUrl}/sendemail`,data)
//     console.log(data);
//     return this.http.post(`${this.baseUrl}/sendemail`,data)
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl: string = "https://emailapi-seven.vercel.app"; // Use your Vercel backend URL

  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    console.log(data);
    return this.http.post(`${this.baseUrl}/sendemail`, data, {
      headers: { 'Content-Type': 'application/json' }, // Ensure correct headers
      withCredentials: false  // Disable credentials if not required
    });
  }
}

//iwtu nncl jatz dmph