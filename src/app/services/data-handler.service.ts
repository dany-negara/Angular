import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {Testdata} from '../data/testdata';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getcategories(): Category[]{
    return Testdata.categories;
  }
}
