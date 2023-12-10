import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredents:Ingredient[]=[
    new Ingredient('Aloo',1),
    new Ingredient('Jeera',1),
    new Ingredient('Maida',500),
  ];
  constructor() { }
  getIngredients() {
    return this.ingredents.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredents.push(ingredient);
    this.ingredientsChanged.emit(this.ingredents.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredents.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredents.slice());
  }
}
