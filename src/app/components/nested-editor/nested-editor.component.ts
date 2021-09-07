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

  constructor() {}

  ngOnInit() {}

  public onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn('onSubmit()', this.nestedProfileForm.value);
  }
}
