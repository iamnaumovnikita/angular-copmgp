import {
  AfterViewChecked,
  Component,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  OnChanges,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field/form-field';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  templateUrl: 'parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements AfterViewChecked, OnChanges {
  @Input()
  appearance: MatFormFieldAppearance;

  @ViewChild(ChildComponent) component: ChildComponent;

  ngOnChanges() {
    if (this.component) {
      this.component.appearance = this.appearance;
      this.component.cdr.detectChanges();
      console.log('bbbb');
    }
  }

  ngAfterViewChecked() {
    //this.ngZone.run(() => {
    //  this.component.appearance = this.appearance;
    //});
    //this.component.appearance = this.appearance;
    // this.cdr.detectChanges();
  }

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}
}
