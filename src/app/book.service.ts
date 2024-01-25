import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.interface'; 

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'https://bookpage20240124143243.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + '/books');
  }
  addBook(addBookRequest: Book):Observable<Book> {
    return this.http.post<Book>(this.baseUrl+ '/books', addBookRequest);
  }
  getBookById(id:number):Observable<Book> {
    return this.http.get<Book>(this.baseUrl + '/books/' + id)
  }
  updateBook(id: number, editBookRequest: Book): Observable<Book> {
    return this.http.put<Book>(this.baseUrl + '/books/' + id, editBookRequest)
  }
  deleteBook(id: number): Observable<Book>{
    return this.http.delete<Book>(this.baseUrl + '/books/' + id)
  }
}
