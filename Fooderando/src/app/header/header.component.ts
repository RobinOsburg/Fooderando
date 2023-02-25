import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  checkboxValue = false;

  toggleScrollLock() {
    if (document.body.style.overflow ==="hidden") {
      document.body.style.overflow ="auto"
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  uncheckCheckbox() {
    this.checkboxValue = false;
  }

}
