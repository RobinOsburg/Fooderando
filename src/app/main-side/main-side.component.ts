import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { BasketComponent } from '../basket/basket.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-side',
  templateUrl: './main-side.component.html',
  styleUrls: ['./main-side.component.scss'],
})



export class MainSideComponent implements OnInit {

  salads: any;
  bowls:any;
  drinks:any;
  desserts:any;
  basketItems: any[] = [];
  showFiller = false;
  hideBasket = true;

  


  constructor(public dialog: MatDialog,private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/salads.json').subscribe(data => {
      this.salads = data;
    });

    this.http.get('assets/bowls.json').subscribe(data => {
      this.bowls = data;
    });

    this.http.get('assets/drinks.json').subscribe(data => {
      this.drinks = data;
    });

    this.http.get('assets/desserts.json').subscribe(data => {
      this.desserts = data;
    });
  }

  addToBasket(item: any,itemType: string) {
    const index = this.basketItems.findIndex((i) => i.name === item.menuName && i.type === itemType);
    if (index > -1) {
      this.basketItems[index].quantity++;
    } else {
      const basketItem = {
        name: item.menuName,
        price: item.price,
        quantity: 1,
        type: itemType
      };
      this.basketItems.push(basketItem);
    }
  
    // this.dialog.open(BasketComponent, {
    //   data: {
    //     items: this.basketItems
    //   }
    // });
  }

  openBasket(){
    this.dialog.open(BasketComponent, {
      width: '69vw',
      height : '90vh',
      data: {
        items: this.basketItems
      }
    });
  }

  // toggleBasket() {
  //   this.hideBasket = !this.hideBasket;
  // }
}
