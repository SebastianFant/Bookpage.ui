import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.interface';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit{
  quotes : Quote[] = [];
  constructor(private quoteService: QuoteService, private router:Router){}
  ngOnInit(): void {
    const id = Number(localStorage.getItem('userid'));
   this.quoteService.getQuotes(id).subscribe((quotes)=>
   {this.quotes = quotes}
   )
  }
  
}

