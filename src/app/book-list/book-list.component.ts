import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.interface'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books: Book[] = [];
  constructor(private bookService: BookService) { }
  isUserAuthenticated(){
    const token = localStorage.getItem("jwt");
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    })
  }
}
