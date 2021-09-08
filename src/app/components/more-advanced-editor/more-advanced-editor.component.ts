import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-more-advanced-editor',
  templateUrl: './more-advanced-editor.component.html',
  styleUrls: ['./more-advanced-editor.component.css']
})
export class MoreAdvancedEditorComponent implements OnInit {
  moreAdvancedForm = this.fb.group({
    firstName: ['Bradley'],
    lastName: ['Cooper'],
    address: this.fb.group({
      street: ['3033 Compton Blvd.'],
      city: ['Beverly Hills'],
      state: ['CA'],
      zip: ['90210']
    })
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
