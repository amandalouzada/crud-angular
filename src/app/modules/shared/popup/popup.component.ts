import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  public isOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  closePopup() {
    setTimeout(() => {
      this.isOpen = false;
    }, 100)
  }

  openPopup() {
    setTimeout(() => {
      this.isOpen = true;
    }, 100)
  }

  clickOutside() {
    if (this.isOpen){
      this.closePopup();
    }
  }

}
