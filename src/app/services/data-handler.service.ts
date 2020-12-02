import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {Testdata} from '../data/testdata';
import {Task} from '../model/Task';
import validate = WebAssembly.validate;
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';



@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getcategories(): Category[]{
    return Testdata.categories;
  }
  gettasks(): Task[]{
    return Testdata.tasks;
  }
  getTaskbyCategory(category:Category): Task[]{
   const tasks = Testdata.tasks.filter((task:any)=> task.category === category);
   return tasks;
  }

}
