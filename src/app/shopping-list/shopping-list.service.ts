import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Oranges', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  emmitIngredientChange() {
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emmitIngredientChange();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    /* instead of loop through the array to push, the code will push all at once
    ingredients.forEach(ingredient => {
      this.ingredients.push(ingredient);
    });

    for (const i of ingredients) {
      this.addIngredient(i);
    } */

    this.ingredients.push(...ingredients);
    this.emmitIngredientChange();
  }

  constructor() { }
}
