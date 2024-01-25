import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.interface';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit{
  constructor(private quoteService:QuoteService, private router: Router){}
  ngOnInit(): void {
    
  }
  addQuote(){
    this.addQuoteRequest.user = Number(localStorage.getItem('userid'));
    this.quoteService.addQuote(this.addQuoteRequest)
    .subscribe({
      next:(quote) => {
        this.router.navigate(['quotes']);
      }
    });
  }
  addQuoteRequest: Quote = {
    id:0,
    text:'',
    author:'',
    user:0
  };
}
