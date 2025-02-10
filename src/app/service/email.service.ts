import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl:String="https://emailapi-seven.vercel.app"
  constructor(private http:HttpClient) { }
  sendEmail(data:any){
    // return this.http.post(`${this.baseUrl}/sendemail`,data)
    console.log(data);
    return this.http.post(`${this.baseUrl}/sendemail`,data)
  }
}
//iwtu nncl jatz dmph