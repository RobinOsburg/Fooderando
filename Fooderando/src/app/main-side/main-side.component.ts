import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-main-side',
  templateUrl: './main-side.component.html',
  styleUrls: ['./main-side.component.scss']
})
export class MainSideComponent {

  constructor(public dialog: MatDialog) { }

  openBasket(){
    this.dialog.open(BasketComponent) 
    
  }
}
