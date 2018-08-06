import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/index";

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscribtion: Subscription;
  editMode = false;
  editedNumberIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.subscribtion = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedNumberIndex = index
        }
      )
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient)
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
