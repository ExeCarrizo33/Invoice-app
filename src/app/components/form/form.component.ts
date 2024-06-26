import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Output() addItemEvent = new EventEmitter();

  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: '',
  };

  onSubmit(itemForm: NgForm) {
    if (itemForm.valid) {
      this.addItemEvent.emit({ id: this.counterId, ...this.item });
      this.counterId++;

      this.item = {
        product: '',
        price: '',
        quantity: '',
      };
      itemForm.reset();
      itemForm.resetForm();
    }
  }
}
