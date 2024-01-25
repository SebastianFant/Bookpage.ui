import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.interface';
import { QuoteService } from '../quote.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit{
  constructor(private route: ActivatedRoute, private quoteService: QuoteService, private router: Router) { }
ngOnInit(): void {
  this.route.paramMap.subscribe({
    next: (params) => {
      const id = params.get('id');

      if(id){
        this.quoteService.getQuoteById(Number(id))
        .subscribe({
          next: (response) =>
          this.quoteDetails = response,
        });
      }
    }
  })
}
editQuote() {
  this.quoteService.updateQuote(this.quoteDetails.id, this.quoteDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['quotes']);
      }
    });
}
deleteQuote(id: number) {
  this.quoteService.deleteQuote(id)
    .subscribe({
      next: (response) => {
        
          this.router.navigate(['quotes'])
        
      }
    });
  }
quoteDetails: Quote = {
  id: 0,
  text:'',
  author:'',
  user:0
};
}
