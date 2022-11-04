import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AssignmentService, PeopleService, Person, PersonDetailComponent } from 'src/app/core';


@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})

export class PeoplePage {
  constructor(
    private peopleService: PeopleService,
    private assignmentService: AssignmentService,
    private modal: ModalController,
    private alert: AlertController
  ) { }

  getPeople() {
    return this.peopleService._people$;
  }

  async presentPersonForm(person: Person) {
    const modal = await this.modal.create({
      component: PersonDetailComponent,
      componentProps: {
        person: person
      }
    });

    modal.present();
    modal.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.peopleService.addPerson(result.data.person);
            break;
          case 'Edit':
            this.peopleService.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }
  
  onNewPerson() {
    this.presentPersonForm(null);
  }

  onEditPerson(person) {
    this.presentPersonForm(person);
  }

  async onDeleteAlert(person) {
      const alert = await this.alert.create({
        header: '¿Está seguro de que desea borrar a la persona?',
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
              this.peopleService.deletePersonById(person.id);
            },
          },
        ],
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
  }

  async onPersonExistsAlert(task) {
    const alert = await this.alert.create({
      header: 'ADVERTENCIA',
      message: 'No se puede borrar esa persona porque tiene asignada una tarea',
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => { },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  onDeletePerson(person) {
    if (!this.assignmentService.getAssignmentByPersonId(person.id).length) {
      this.onDeleteAlert(person);
    } else {
      this.onPersonExistsAlert(person);
    }
  }

}
