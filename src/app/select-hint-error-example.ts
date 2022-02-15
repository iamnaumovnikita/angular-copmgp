import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field/form-field';
import { ChildComponent } from './child.component';

interface Animal {
  name: string;
  sound: string;
}

/** @title Select with form field features */
@Component({
  selector: 'select-hint-error-example',
  templateUrl: 'select-hint-error-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectHintErrorExample {
  appearance: MatFormFieldAppearance = 'fill';

  switchA() {
    if (this.appearance === 'fill') {
      this.appearance = 'legacy';
    } else {
      this.appearance = 'fill';
    }
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
