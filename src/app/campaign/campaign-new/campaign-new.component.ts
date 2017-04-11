import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

const formBuilder = new FormBuilder();

const pageConfiguration = {
  name: ['', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(30)
  ]],
  page: ['', [
    Validators.required,
    CustomValidators.url
  ]],
  percent: ['', [
    Validators.required,
    Validators.pattern(/^-?\d+$/),
    CustomValidators.min(0),
    CustomValidators.max(100)
  ]]
};

const formConfiguration = {
  final: ['', [
    Validators.required,
    CustomValidators.url
  ]],
  pages: formBuilder.array([])
};

@Component({
  selector: 'app-campaign-new',
  templateUrl: './campaign-new.component.html',
  styleUrls: ['./campaign-new.component.scss']
})
export class CampaignNewComponent {

  form: FormGroup;
  percentMessages: { [name: string]: string; } = {
    pattern: 'Please enter valid percent value',
    max: 'Max value 100',
    min: 'Min value 0'
  };

  constructor() {
    this.form = formBuilder.group(formConfiguration);
    this.addPage();
  }

  addPage() {
    const pagesControl = <FormArray> this.form.controls['pages'];
    const group = formBuilder.group(pageConfiguration);
    pagesControl.push(group);
  }

  removePage(index: number) {
    const pagesControl = <FormArray> this.form.controls['pages'];
    pagesControl.removeAt(index);
  }

}
