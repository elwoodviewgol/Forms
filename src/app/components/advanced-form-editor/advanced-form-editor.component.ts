import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-advanced-form-editor',
  templateUrl: './advanced-form-editor.component.html',
  styleUrls: ['./advanced-form-editor.component.css']
})
export class AdvancedFormEditorComponent implements OnInit {
  public valueDisplay: any;

  public nestedProfileForm = new FormGroup({
    firstName: new FormControl('Bradley'),
    lastName: new FormControl('Cooper'),
    address: new FormGroup({
      street: new FormControl('3033 Compton Blvd.'),
      city: new FormControl('Beverly Hills'),
      state: new FormControl('CA'),
      zip: new FormControl('90210')
    })
  });

  constructor() {
    this.valueDisplay = this.nestedProfileForm.value;
  }

  ngOnInit() {}

  //
  public updateProfile() {
    console.log('updateProfile()', 'I am inside of Update Procedural');
    console.log('updateProfile()', this.nestedProfileForm.value);

    // UPDATE OBJECT
    this.nestedProfileForm.patchValue({
      firstName: 'Tupac Amaru',
      lastName: 'Shakur',
      address: {
        street: '123 Drew Street'
      }
    });

    // UPDATE VALUE
    this.valueDisplay = this.nestedProfileForm.value;

    console.log('updateProfile() after', this.nestedProfileForm.value);
  }
}
