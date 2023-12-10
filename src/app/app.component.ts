import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecipeBookProject';
  selectedMenu: string='recipe';

  receivedData(data:any){
    this.selectedMenu=data;
  }
}
