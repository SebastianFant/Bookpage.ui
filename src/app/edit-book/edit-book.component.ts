import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.interface';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookDetails: Book = {
    id: 0,
    title: '',
    author: '',
    year: 0,
    genre: ''

  };
  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {

          this.bookService.getBookById(Number(id))
            .subscribe({
              next: (response) =>
                this.bookDetails = response,
            });
        }
      }
    })
  }

  editBook() {
    this.bookService.updateBook(this.bookDetails.id, this.bookDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['books']);
        }
      });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['books']);
        }
      });
  }
}
