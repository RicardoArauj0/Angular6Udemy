import { Recipe } from './../recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgCiXh4-hnQfKidexfZxQMdiJO-OOq4OXSNOvLKv8AEH4-hQUXw')
  ];

}
