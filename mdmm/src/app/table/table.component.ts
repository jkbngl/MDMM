import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  books: Book[];
  totalRecords: number;
  cols: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().then((res) => this.extractData(res));
    

    this.cols = [
      { field: 'name', header: 'Name' },
      {field: 'author', header: 'Author' },
      { field: 'price', header: 'Price' }      
    ];
  }

  extractData(books) {       
    this.books = books;
    this.totalRecords = this.books.length; 
  }


  onRowEditInit(book: Book) {
    console.log('Row edit initialized');
    console.log(this.books);
  }

  onRowEditSave(book: Book) {
    console.log('Row edit saved');
    console.log(book);

  }

  onRowEditCancel(book: Book, index: number) {
    console.log('Row edit cancelled');
  }


}
