import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Assign } from 'src/app/models/assign';
import { AssignmentService } from 'src/app/services/assignment.service';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';

@Component({
  selector: 'app-assign',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage {

  constructor(
    private assignService: AssignmentService,
    private modal: ModalController,
    private alert:AlertController,
  ) { }

  getAssignment(){
    return this.assignService.getAssignment();
  }

  async presentAssignForm(assign:Assign){
    const modal = await this.modal.create({
      component:AssignmentDetailComponent,
      componentProps:{
        assign:assign //cambio assign: assign por person:assign
      }
    });
    
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.assignService.addAssignmnet(result.data.assign);
            break;
          case 'Edit':
            this.assignService.updateAssignment(result.data.assign);
            break;
          default:
        }
      }
    });
  }
  
  onNewAssign(){
    this.presentAssignForm(null);  
  }

  onEditAssign(assign){
    this.presentAssignForm(assign);
  }

  async onDeleteAlert(assign){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desea borrarlo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.assignService.deleteAssignmentById(assign.id);
          },
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }
  
  onDeleteAssign(assign){
   this.onDeleteAlert(assign);    
  }
}
