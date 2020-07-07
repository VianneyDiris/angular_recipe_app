import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  sub: Subscription;
  editMode = false;
  indexEditItem: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
   this.sub = this.shoppingListService.startedEditing.subscribe(
     (index: number) => {
       this.editMode = true;
       this.indexEditItem = index;
       this.editedItem = this.shoppingListService.getIngredient(index);
       this.form.setValue({
         name: this.editedItem.name,
         amount: this.editedItem.amount
       });
     }
   );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmitItem(form: NgForm){
    const valueForm = form.value;
    const newIngredient = new Ingredient(valueForm.name, valueForm.amount);
    if (this.editMode){
      this.shoppingListService.updateIngredient(this.indexEditItem, newIngredient);
    }
    else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.form.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.indexEditItem);
    this.onClear();
  }

}
