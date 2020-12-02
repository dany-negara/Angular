
import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class Testdata{
  static categories:  Category[]= [
      {id:  1,title:  "Job"},
      {id:  2,title:  "Weekend"},
      {id:  3,title:  "Hobby"},
      {id:  4,title:  "Action"},
      {id:  5,title:  "Relax"},
      {id:  6,title:  "Job"},
      {id:  7,title:  "Weekend"},
      {id:  8,title:  "Hobby"},
      {id:  9,title:  "Action"},
      {id:  10,title:  "Relax"},
  ];

  static priority: Priority[]=[
    {id:  1,title:  "Low", color:  "#e5e5e5"},
    {id:  2,title:  "Stanadrt", color:  "#85D1B2"},
    {id:  3,title:  "High", color:  "#F1828D"},
    {id:  4,title:  "Very High", color:  "#F11280"}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: "Go to the course",
      priority: Testdata.priority[2],
      completed: false,
      category: Testdata.categories[9],
      date: new Date('25.11.2020')

},
    {
      id:2,
      title: "Go to the course",
      priority: Testdata.priority[2],
      completed: false,
      category: Testdata.categories[9],
      date: new Date('25.11.2020')

    },
    {
      id: 3,
      title: "Go to the course",
      priority: Testdata.priority[2],
      completed: false,
      category: Testdata.categories[9],
      date: new Date('25.11.2020')

    },
    {
      id: 4,
      title: "Go to work",
      priority: Testdata.priority[2],
      completed: false,
      category: Testdata.categories[9],
      date: new Date('25.11.2020')

    },
    {
      id: 5,
      title: "Go to shoping",
      priority: Testdata.priority[2],
      completed: false,
      category: Testdata.categories[9],
      date: new Date('25.11.2020')

    },
  ];
}
