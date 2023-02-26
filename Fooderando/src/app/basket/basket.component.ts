import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor(private dialogRef: MatDialogRef<BasketComponent>){ }

  closeDialog(){
    this.dialogRef.close();
  }
}
