import { Assign } from "src/app/core/models/assign.model";

export const LIST_OF_ASSIGNMENTS: Assign[] = [
  {
    id: 1,
    personId: 3,
    taskId: 3,
    createdAt: '2022-01-12T00:00:00+01:00',
    dateTime: '2022-02-12T11:00:00+01:00',

  },
  {
    id: 2,
    personId: 4,
    taskId: 4,
    createdAt: '2022-02-12T00:00:00+01:00',
    dateTime: '2022-03-12T15:00:00+01:00',
  },
  {
    id: 3,
    personId: 2,
    taskId: 2,
    createdAt: '2022-03-12T00:00:00+01:00',
    dateTime: '2023-01-12T07:00:00+01:00',
  },
  {
    id: 4,
    personId: 1,
    taskId: 1,
    createdAt: '2022-04-12T00:00:00+01:00',
    dateTime: '2023-02-12T06:00:00+01:00',
  }
];