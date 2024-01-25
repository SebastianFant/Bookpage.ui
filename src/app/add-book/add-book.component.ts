import { Component, OnInit } from '@angular/core';
import { Book } from '../book.interface';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{

  constructor(private bookService: BookService, private router: Router) { }
  ngOnInit(): void {
      
  }
  addBook() {
    this.bookService.addBook(this.addBookRequest)
      .subscribe({
        next: (book) => {
          this.router.navigate(['books']);
        }
      });
  }
  addBookRequest: Book = {
    id: 0,
    title: '',
    author: '',
    year: 0,
    genre: ''

  };

}
