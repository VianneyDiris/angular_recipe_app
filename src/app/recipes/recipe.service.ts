import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Recipe 1', 'this is a test for a recipe 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('Recipe 2', 'this is a test for a recipe 2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];

  getRecipe(){
    return this.recipes.slice();
  }

}
