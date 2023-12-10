import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subscription } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{
constructor(private recipeSrv:RecipeService){

}
  recipe:any;

  recipeSubb:Subscription | undefined;
 
  ngOnInit(): void {
    this.recipeSubb = this.recipeSrv.selectedRecipe
    .subscribe(data=>{
      this.recipe=data;
    })
  }
}
