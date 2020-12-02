import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {Testdata} from '../data/testdata';
import {Task} from '../model/Task';
import validate = WebAssembly.validate;
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import {BehaviorSubject, Subject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  tasksSubject = new BehaviorSubject<Task[]>(Testdata.tasks);
  categoriesSubject =new BehaviorSubject<Category[]>(Testdata.categories);

  constructor() { }

  getcategories(): Category[]{
    return Testdata.categories;
  }
  filltasks(){
    this.tasksSubject.next(Testdata.tasks);
  }
  fillTaskbyCategory(category:Category){
   const tasks = Testdata.tasks.filter(task => task.category === category);
   this.tasksSubject.next(tasks);
  }




}
