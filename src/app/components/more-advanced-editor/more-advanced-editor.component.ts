import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-more-advanced-editor',
  templateUrl: './more-advanced-editor.component.html',
  styleUrls: ['./more-advanced-editor.component.css']
})
export class MoreAdvancedEditorComponent implements OnInit {
  public moreAdvancedForm = this.fb.group({
    firstName: ['Bradley'],
    lastName: ['Cooper'],
    address: this.fb.group({
      street: ['3033 Compton Blvd.'],
      city: ['Beverly Hills'],
      state: ['CA'],
      zip: ['90210']
    })
  });

  public valueDisplay: any;

  constructor(private fb: FormBuilder) {
    this.valueDisplay = this.moreAdvancedForm.value;
  }

  ngOnInit() {}

  public updateProfile() {
    console.log('updateProfile()', 'I am inside of Update Procedural');
    console.log('updateProfile()', this.moreAdvancedForm.value);

    // UPDATE OBJECT
    this.moreAdvancedForm.patchValue({
      firstName: 'Malcolm',
      lastName: 'Little',
      address: {
        street: '123 Drew Street'
      }
    });

    this.valueDisplay = this.moreAdvancedForm.value;

    console.log('updateProfile() after', this.moreAdvancedForm.value);
  }
}
