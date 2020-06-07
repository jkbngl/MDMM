import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  books: Book[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getData().then(books => this.books = books);
  }

}
