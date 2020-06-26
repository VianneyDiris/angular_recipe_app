import { Recipe } from '../recipes/recipe.model';

export class ShoppingListService {
  private recipes: Recipe[] = [
    new Recipe('Recipe 1', 'this is a test for a recipe 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('Recipe 2', 'this is a test for a recipe 2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
