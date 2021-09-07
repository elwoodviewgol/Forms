import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-advanced-form-editor',
  templateUrl: './advanced-form-editor.component.html',
  styleUrls: ['./advanced-form-editor.component.css']
})
export class AdvancedFormEditorComponent implements OnInit {
  public valueDisplay: string = '';

  public nestedProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() {}

  ngOnInit() {}

  public onSubmit() {
    // SHOW THE VALUES
    this.valueDisplay = this.nestedProfileForm.value;
    console.warn('onSubmit()', this.nestedProfileForm.value);
  }

  //
  //
  public updateProfile() {
    console.log('updateProfile()', 'I am inside of Update Procedural');

    this.nestedProfileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  //
  //
}
