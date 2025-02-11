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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl: string = "https://emailapi-seven.vercel.app"; // Updated API URL

  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.baseUrl}/sendemail`, data, { headers });
  }
}


//iwtu nncl jatz dmph