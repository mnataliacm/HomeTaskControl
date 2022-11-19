import { Task } from "src/app/core/models/task.model";
import { TranslateService } from '@ngx-translate/core';

export const LIST_OF_TASKS: Task[] = [
  {
    id:1,
    name: "{{ task.task1 | translate }}",
    time:30,
    picture:"https://svgsilh.com/svg/1294960-009688.svg"
  },
  {
    id:2,
    name:"Lavadora",
    time:20,
    picture:"https://media.istockphoto.com/vectors/washing-machine-washer-flat-color-line-icon-isolated-on-white-vector-id1194750450?b=1&k=6&m=1194750450&s=170x170&h=K8pGlX0xN1Qw3bCKk6ou1uIvMnHhl_FDh27tJtLE3L8="
  },
  {
    id:3,
    name:"Planchar",
    time:50,
    picture:"https://cdn.pixabay.com/photo/2013/07/13/11/49/iron-158742_960_720.png"
  },
  {
    id:4,
    name:"Ventanas",
    time:150,
    picture:"https://svgsilh.com/svg_v2/1906739.svg"
  },
  {
    id:5,
    name:"Lavar platos",
    time:20,
    picture:"https://cdn.pixabay.com/photo/2014/12/22/00/05/soup-576783_640.png"
  }   
];



