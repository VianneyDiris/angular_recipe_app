import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredientsToShopping(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

}
