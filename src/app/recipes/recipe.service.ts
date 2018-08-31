import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesComponent } from './recipes.component';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private shoppingService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is a simple test',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgCiXh4-hnQfKidexfZxQMdiJO-OOq4OXSNOvLKv8AEH4-hQUXw',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
      ] ),
     new Recipe('A Test Recipe 2',
      'This is a simple test 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgCiXh4-hnQfKidexfZxQMdiJO-OOq4OXSNOvLKv8AEH4-hQUXw',
       [
        new Ingredient('Bear', 2),
        new Ingredient('Bacon', 5),
        new Ingredient('Pasta', 5)
       ] )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredientsToShoppingList(ingredients);
  }
}
