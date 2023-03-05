import { Component } from '@angular/core';
import { BasketComponent } from '../basket/basket.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) { }

 

  // checkboxValue = false;

  // toggleScrollLock() {
  //   if (document.body.style.overflow ==="hidden") {
  //     document.body.style.overflow ="auto"
  //   } else {
  //     document.body.style.overflow = "hidden"
  //   }
  // }

  // uncheckCheckbox() {
  //   this.checkboxValue = false;
  // }

  

}
