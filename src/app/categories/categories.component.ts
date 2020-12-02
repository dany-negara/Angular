import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../services/data-handler.service';
import {Category} from '../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // @ts-ignore
  categories: Category[];
  constructor(private dataHandler: DataHandlerService) { }
//mettod called automatic after initialization components
  ngOnInit(): void {
    this.categories = this.dataHandler.getcategories();
    console.log(this.categories);
  }

  ShowTasksByCategory(category: Category) {
    this.dataHandler.getTaskbyCategory(category);
  }
}
