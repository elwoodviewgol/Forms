//
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//
const form_template = [
  {
    type: 'textBox',
    label: 'Name'
  },
  {
    type: 'number',
    label: 'Age'
  },
  {
    type: 'select',
    label: 'favorite book',
    options: ['Jane Eyre', 'Pride and Prejudice', 'Wuthering Heights']
  }
];

//
@Component({
  selector: 'app-more-dynamic-editor',
  templateUrl: './more-dynamic-editor.component.html',
  styleUrls: ['./more-dynamic-editor.component.css']
})
export class MoreDynamicEditorComponent implements OnInit {
  public myFormGroup: FormGroup;
  public formTemplate: any = form_template;

  constructor() {}

  ngOnInit() {
    let group = {};

    form_template.forEach(input_template => {
      group[input_template.label] = new FormControl('');
    });

    this.myFormGroup = new FormGroup(group);
  }
  onSubmit() {
    console.log(this.myFormGroup.value);
  }
}
