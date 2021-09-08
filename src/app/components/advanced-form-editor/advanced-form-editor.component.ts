import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-advanced-form-editor',
  templateUrl: './advanced-form-editor.component.html',
  styleUrls: ['./advanced-form-editor.component.css']
})
export class AdvancedFormEditorComponent implements OnInit {
  public valueDisplay = {
    firstName: 'Bradley',
    lastName: 'Cooper',
    address: {
      street: '3033 Compton Blvd.',
      city: 'Beverly Hills',
      state: 'CA',
      zip: '90210'
    }
  };

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

  //
  public updateProfile() {
    console.log('updateProfile()', 'I am inside of Update Procedural');
    console.log('updateProfile()', this.nestedProfileForm.value);

    // UPDATE OBJECT
    this.nestedProfileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });

    // UPDATE VALUE
    this.valueDisplay = this.nestedProfileForm.value;

    console.log('updateProfile() after', this.nestedProfileForm.value);
  }

  //
  //
}
