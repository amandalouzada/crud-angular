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

  closePopup(){
    this.isOpen = false;
  }

  openPopup(){
    this.isOpen = true;
  }

}
