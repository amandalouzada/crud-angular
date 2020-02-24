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
    console.log('open')
    setTimeout(() => {
      this.isOpen = true;
    }, 100)
  }

  clickOutside() {
    console.log('open');

    if (this.isOpen){
      console.log('open');
      this.closePopup();

    }
  }

}
