import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//
import { AppComponent } from './app.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { NestedEditorComponent } from './components/nested-editor/nested-editor.component';
import { AdvancedFormEditorComponent } from './components/advanced-form-editor/advanced-form-editor.component';
import { MoreAdvancedEditorComponent } from './components/more-advanced-editor/more-advanced-editor.component';
import { ValidFormEditorComponent } from './components/valid-form-editor/valid-form-editor.component';
import { DynamicEditorComponent } from './components/dynamic-editor/dynamic-editor.component';
import { MoreDynamicEditorComponent } from './components/more-dynamic-editor/more-dynamic-editor.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    NestedEditorComponent,
    AdvancedFormEditorComponent,
    MoreAdvancedEditorComponent,
    ValidFormEditorComponent,
    DynamicEditorComponent,
    MoreDynamicEditorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
