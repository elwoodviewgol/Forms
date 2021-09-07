import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nested-editor',
  templateUrl: './nested-editor.component.html',
  styleUrls: ['./nested-editor.component.css']
})
export class NestedEditorComponent implements OnInit {
  nestedProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  public valueDisplay: string = '';

  constructor() {}

  ngOnInit() {}

  public onSubmit() {
    // SHOW THE VALUES
    this.valueDisplay = this.nestedProfileForm.value;
    // TODO: Use EventEmitter with form value
    console.warn('onSubmit()', this.nestedProfileForm.value);
  }
}
