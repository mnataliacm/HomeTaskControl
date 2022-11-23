import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { Task, TaskDetailComponent, TasksService, AssignmentService } from 'src/app/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage {

  constructor(
    public tasksService: TasksService,
    private assignmentService: AssignmentService,
    private modal: ModalController,
    private alert: AlertController,
    private translate: TranslateService
    ) { }

  getTasks(){
    return this.tasksService._tasks$;
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
      header: await lastValueFrom(this.translate.get('task.alert')),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get('button.cancel')),
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: await lastValueFrom(this.translate.get('button.delete')),
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
  
  async onTaskExistsAlert(person) {
    const alert = await this.alert.create({
      header: await lastValueFrom(this.translate.get('detail.warning')),
      message: await lastValueFrom(this.translate.get('task.warning')),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get('button.close')),
          role: 'close',
          handler: () => { },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  onDeleteTask(task){
    if (!this.assignmentService.getAssignmentByTaskId(task.id).length) {
      this.onDeleteAlert(task);
    } else {
      this.onTaskExistsAlert(task);
    }
  }

}
