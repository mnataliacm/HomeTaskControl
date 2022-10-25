import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Task } from 'src/app/core/models/task';
import { TasksService } from 'src/app/core/services/tasks.service';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage {

  constructor(
    public tasksService: TasksService,
    private modal: ModalController,
    private alert: AlertController
  ) { }

  getTasks(){
    return this.tasksService.getTasks();
  }

  async presentTaskForm(task:Task){
    const modal = await this.modal.create({
      component:TaskDetailComponent,
      componentProps:{
        task:task
      }
    });
    
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.tasksService.addTask(result.data.task);
            break;
          case 'Edit':
            this.tasksService.updateTask(result.data.task);
            break;
          default:
        }
      }
    });
  }
  
  onNewTask(){
    this.presentTaskForm(null);  
  }

  onEditTask(task){
    this.presentTaskForm(task);
  }

  async onDeleteAlert(task){
    const alert = await this.alert.create({
      header: '¿Está seguro de que quiere borrar a la tarea?',
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
            this.tasksService.deleteTaskById(task.id);
          },
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }
  
  onDeleteTask(task){
   this.onDeleteAlert(task);    
  }

}
