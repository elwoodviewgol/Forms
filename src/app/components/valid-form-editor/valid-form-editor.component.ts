import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-form-editor',
  templateUrl: './valid-form-editor.component.html',
  styleUrls: ['./valid-form-editor.component.css']
})
export class ValidFormEditorComponent implements OnInit {
  public validatedForm = this.fb.group({
    firstName: ['Bradley', Validators.required],
    lastName: ['Cooper', Validators.required],
    address: this.fb.group({
      street: ['3033 Compton Blvd.'],
      city: ['Beverly Hills'],
      state: ['CA'],
      zip: ['90210']
    })
  });

  public valueDisplay: any;

  constructor(private fb: FormBuilder) {
    this.valueDisplay = this.validatedForm.value;
  }

  ngOnInit() {}

  public updateProfile() {
    this.validatedForm.patchValue({
      firstName: 'Elwood',
      lastName: 'Berry',
      address: {
        street: '3904 Waters Edge Dr',
        city: 'Austin',
        state: 'TX',
        zip: '78731'
      }
    });

    this.valueDisplay = this.validatedForm.value;
  }

  public onSubmit() {
    this.valueDisplay = this.validatedForm.value;
    console.warn('onSubmit()', this.validatedForm.value);
  }
}
