import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-editor',
  templateUrl: './dynamic-editor.component.html',
  styleUrls: ['./dynamic-editor.component.css']
})
export class DynamicEditorComponent implements OnInit {
  public dynamicForm = this.fb.group({
    firstName: ['Dynamic', Validators.required],
    lastName: ['Form', Validators.required],
    address: this.fb.group({
      street: ['1000 Angular St.'],
      city: ['Frisco'],
      state: ['TX'],
      zip: ['76227']
    }),
    aliases: this.fb.array([this.fb.control('')])
  });

  public valueDisplay: any;

  constructor(private fb: FormBuilder) {
    this.valueDisplay = this.dynamicForm.value;
  }

  public updateProfile() {
    this.dynamicForm.patchValue({
      firstName: 'Elwood',
      lastName: 'Berry',
      address: {
        street: '3904 Waters Edge Dr',
        city: 'Austin',
        state: 'TX',
        zip: '78731'
      }
    });

    this.valueDisplay = this.dynamicForm.value;
  }

  public onSubmit() {
    this.valueDisplay = this.dynamicForm.value;
    console.warn('onSubmit()', this.dynamicForm.value);
  }

  ngOnInit() {}

  get aliases() {
    return this.dynamicForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
