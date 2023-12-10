import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

@Output() selectedData = new EventEmitter<string>();

  recipeClick(data:string){
    this.selectedData.emit(data);
  }
  shoppingClick(data:string){
    this.selectedData.emit(data);
  }
}
