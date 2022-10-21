import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Assign } from 'src/app/models/assign';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assign:Assign;

  onEditClick(){
    this.onEdit.emit(this.assign);
  }

  onDeleteClick(){
    this.onDelete.emit(this.assign);
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e:Event) {
    this.popover.Event = e
    this.isOpen = true;
  }

  onDismiss(result){
    this.popover.dismiss(null, 'cancel');
  }

  
}
