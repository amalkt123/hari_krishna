import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  quantity=1;
  disable;
  constructor() {
    this.disable=true;
 }



 plus(){
  this.quantity+=1;
  this.disable=false;
}
minus(){
  if(this.quantity==2){
    this.disable=true;
    this.quantity-=1;
  }else{
  this.quantity-=1;
  
  }
}



  ngOnInit() {
  }

}
