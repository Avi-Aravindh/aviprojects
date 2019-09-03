import { Component, OnInit } from '@angular/core';
import { BooksService } from '../Services/books.service';
import Book from '../Interfaces/book';


@Component({
  selector: 'bookrollover-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  booksToTable: Book[];
  displayedColumns: string[] = [
    'bookId',
    'bookName',
    'agent',
    'carrier',
    'created',
    'updated',
    'delete'
  ];
  dataSource;

  constructor(private books: BooksService) {}

  ngOnInit() {
    const bookSubscription = this.books.getBooks().subscribe(
      (b: Book[]) => {
        this.booksToTable = b;
        this.dataSource = this.booksToTable;
        console.log(this.booksToTable);
      },
      err => console.log(err)
    );
  }
}
