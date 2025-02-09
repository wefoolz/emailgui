import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../service/email.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-email',
  imports: [MatFormFieldModule,CommonModule,MatInputModule,FormsModule, MatProgressSpinnerModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
data={
to:"",
subject:"",
message:""

}

flag:boolean=false;
  constructor(private emailservice: EmailService, private snak:MatSnackBar){}
  doSubmitForm(){
    console.log("try to submit form");

    console.log(this.data.to)
    console.log(this.data.subject)
    console.log(this.data.message)
    if(this.data.to=='' || this.data.subject=='' || this.data.message==''){
      this.snak.open("fields can not be empty!!", "Ok");
      return ;
    }
    this.flag=true;
    this.emailservice.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
        this.snak.open("Email Sent success!!","OK");
        this.flag=false;
      },
      error=>{
        console.log(error);
        this.flag=false;
        this.snak.open("Error!!","OK");
      }
    );
  }

  
}
