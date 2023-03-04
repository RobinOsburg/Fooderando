import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  
})
export class BasketComponent {

  items: any[];


  constructor(private dialogRef: MatDialogRef<BasketComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,) 
    {
    this.items = data.items;
  }

  getTotal() {
    let total = 0;

    for (let item of this.items) {
      total += parseFloat(item.price) * item.quantity;
    }

    return total.toFixed(2);
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    const index = this.items.indexOf(item);
    if (item.quantity > 0) {
      item.quantity--;
    }
    if(item.quantity <= 0){
      this.items.splice(index, 1);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  hasSalad() {
    return this.items.some((item) => item.name.toLowerCase().includes('salad'));
  }
  
  hasBowl() {
    return this.items.some((item) => item.name.toLowerCase().includes('bowl'));
  }
}
