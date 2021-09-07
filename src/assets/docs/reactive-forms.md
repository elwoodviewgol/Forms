# Reactive Forms  
  
[Source](https://angular.io/guide/reactive-forms)  
[Live Example](https://stackblitz.com/angular/qrkmnxoqqoo?file=src%2Fapp%2Fapp.component.ts)  
  
## Quick Links  
  
1. Classes and Directives provided by ReactiveFormsModule, see the [Reactive forms API](https://angular.io/guide/reactive-forms#reactive-forms-api) section.   
1. For complete syntax details of these classes and directives, see the API reference documentation for the [Forms package](https://angular.io/api/forms).  

---  
  
[Overview of reactive forms](#)
[Adding a basic form control](#)
[Displaying a form control value](#)
Replacing a form control value
Grouping form controls
Creating nested form groups
Updating parts of the data model
Using the FormBuilder service to generate controls
Validating form input
Creating dynamic forms
Reactive forms API summary  

---  
  
## Overview of reactive forms  
  
"Reactive forms use an [explicit](#) and [immutable](#) approach to managing the [state of a form](#) at a given point in time."

Reactive forms differ from template-driven forms in distinct ways.
1. Reactive forms provide synchronous access to the data model
1. Immutability with observable operators
1. Change tracking through observable streams  
  
## Adding a basic form control  
  
There are three steps to using form controls.  
1. Register the reactive forms module in your application. This module declares the reactive-form directives that you need to use reactive forms.  
1. Generate a new FormControl instance and save it in the component.  
1. Register the FormControl in the template.  

```ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule
  ],
})
export class AppModule { }
```  

## Displaying a form control value 

Reactive forms provide access to information about a given control through properties and methods provided with each instance. These properties and methods of the underlying [AbstractControl](https://angular.io/api/forms/AbstractControl) class are used to control form state and determine when to display messages when handling [input validation](https://angular.io/guide/reactive-forms#basic-form-validation).

Read about other FormControl properties and methods in the API Reference.  

## Replacing a form control value