import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field/form-field';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];
  appearance: MatFormFieldAppearance;

  ngDoCheck() {
    console.log('check');
    alert('check');
  }

  constructor(public cdr: ChangeDetectorRef) {}
}
