import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { AssignmentService, Assign } from '../..';

export const DATETIME_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeSelectableComponent),
  multi: true
};

@Component({
  selector: 'app-date-time-selectable',
  templateUrl: './date-time-selectable.component.html',
  styleUrls: ['./date-time-selectable.component.scss'],
  providers: [DATETIME_PROFILE_VALUE_ACCESSOR]
})

export class DateTimeSelectableComponent implements OnInit, ControlValueAccessor {

  selectedDateTime: string = '';
  propagateChange = (_: any) => { }
  isDisabled: boolean = false;

  constructor(
    private assignmentService: AssignmentService
  ) { }

  writeValue(obj: any): void {
    this.selectedDateTime = obj;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getDateTime() {
    
  }

  onDateTimeChanged(dateTime, accordion?:IonAccordionGroup) {
    this.selectedDateTime = dateTime;
    accordion.value = '';
    this.propagateChange(this.selectedDateTime)
  }

  onConfirm(dateTime, accordion?:IonAccordionGroup) {
    this.onDateTimeChanged(dateTime);
    accordion.value = '';
  }

  onCancel(dateTime, accordion?:IonAccordionGroup) {
    this.selectedDateTime = dateTime;
    accordion.value = '';
  }

  //   onChangeDateTime(dateTime, accordion?:IonAccordionGroup) {
  //   this.selectedDateTime = dateTime;
  //   accordion.value = '';
  //   this.propagateChange(this.selectedDateTime);
  // }

}
