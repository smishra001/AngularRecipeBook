import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe1:Recipe[] | undefined;
  selectedRecipe= new  Subject();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simple Recipe', 'https://t4.ftcdn.net/jpg/05/11/08/05/240_F_511080597_NvqjRdezlARSQHy4VpAKFvUVTEeGdlLy.jpg'),
    new Recipe('A test Recipe 2', 'This is a simple Recipe 2', 'https://t3.ftcdn.net/jpg/04/43/05/22/240_F_443052214_MpRXcakghRZwWTaz73HPJd2kKI1ISiKO.jpg')
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
