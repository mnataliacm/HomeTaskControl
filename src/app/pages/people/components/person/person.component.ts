import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() person:Person;

  ngOnInit() { }

  onEditClick(){
    this.onEdit.emit(this.person);
  }

  onDeleteClick(){
    this.onDelete.emit(this.person);
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
