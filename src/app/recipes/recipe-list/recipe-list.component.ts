import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{
  recipes:Recipe[] | undefined;
 constructor(private recipeSrv:RecipeService){}

  //@Output() passedRecipe = new EventEmitter<Recipe>
  clickedRecipe(data: Recipe | undefined) {
   // this.passedRecipe.emit(data)
    this.recipeSrv.selectedRecipe.next(data)

  }
ngOnInit(): void {
  this.recipes = this.recipeSrv.getRecipes()
}
}
