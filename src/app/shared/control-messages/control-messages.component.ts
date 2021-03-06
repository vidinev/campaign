import { Component, HostBinding, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  @Input() messages: any = {};
  @HostBinding('class.add-margin') get addMargin(): boolean {
    return this.errorMessage;
  };

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        if (typeof this.control.errors[propertyName] === 'string') {
          return this.control.errors[propertyName];
        }
        return ValidationService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName],
          this.messages
        );
      }
    }

    return null;
  }
}
