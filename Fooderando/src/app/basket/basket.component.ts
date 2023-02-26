import { Component,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {


  items: any[];

  constructor(private dialogRef: MatDialogRef<BasketComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
    this.items = data.items;
   }

   getTotal() {
    let total = 0;

    for (let item of this.items) {
      total += parseFloat(item.price);
    }

    return total.toFixed(2);
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
