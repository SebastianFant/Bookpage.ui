import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './quote.interface';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private baseUrl = 'https://localhost:7110/api';
  constructor(private http:HttpClient) { }
  addQuote(addQuoteRequest: Quote):Observable<Quote> {
    return this.http.post<Quote>(this.baseUrl+ '/quotes', addQuoteRequest);
  }
  getQuotes(id:number):Observable<Quote[]>{
    return this.http.get<Quote[]>(this.baseUrl + '/quotes/user/' + id)
  }
  deleteQuote(id:number):Observable<Quote>{
    return this.http.delete<Quote>(this.baseUrl +'/quotes/' + id)
  }
  getQuoteById(id:number):Observable<Quote> {
    return this.http.get<Quote>(this.baseUrl + '/quotes/' + id)
  }
  updateQuote(id: number, editQuoteRequest: Quote): Observable<Quote> {
    return this.http.put<Quote>(this.baseUrl + '/quotes/' + id, editQuoteRequest)
  }
}
