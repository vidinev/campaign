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
    Validators.pattern(/^-?\d+%?$/)
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
    pattern: 'Please enter valid percent value'
  };

  constructor() {
    this.form = formBuilder.group(formConfiguration);
    this.addPage();
    this.addPage();
  }

  addPage() {
    const pagesControl = <FormArray> this.form.get('pages');
    const group = formBuilder.group(pageConfiguration);
    pagesControl.push(group);
  }

  removePage(index: number) {
    const pagesControl = <FormArray> this.form.get('pages');
    pagesControl.removeAt(index);
  }

  next() {
    const finalControl = <FormArray> this.form.get('final');
    const pagesControl = <FormArray> this.form.get('pages');
    finalControl.markAsTouched();
    pagesControl.controls.forEach((control) => {
      control.get('name').markAsTouched();
      control.get('page').markAsTouched();
      control.get('percent').markAsTouched();
    });
  }

}
