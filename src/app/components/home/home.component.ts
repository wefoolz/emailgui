import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private snackbar: MatSnackBar){}

  btnClick(){
    this.snackbar.open('This is snack bar','close',{
      duration: 3000,
    });
  }
}
