import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {Testdata} from '../data/testdata';
import {Task} from '../model/Task';



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

}
