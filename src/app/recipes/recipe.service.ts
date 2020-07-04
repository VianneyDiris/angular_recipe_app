import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('Tasty Burger',
    'This is a very good burger.',
    'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
     [new Ingredient('buns', 1),
      new Ingredient('steak', 1),
      new Ingredient('tomatoes', 2)
    ]),
    new Recipe('French Sandwich',
    'French food are the best',
    'https://cdn.pixabay.com/photo/2014/09/18/21/17/sandwich-451403_1280.jpg',
    [ new Ingredient('baguette', 1),
      new Ingredient('ham', 3),
      new Ingredient('tomatoes', 2)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipeById(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredientsToShopping(ingredients);
  }

}
