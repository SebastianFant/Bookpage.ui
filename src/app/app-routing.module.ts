import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { LoginComponent } from './login/login.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';

const routes: Routes = [
  {
    path: '',
    component:BookListComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/add',
    component: AddBookComponent
  },
  {
    path: 'books/edit/:id',
    component: EditBookComponent
  },
  {
    path: 'quotes/edit/:id',
    component: EditQuoteComponent
  },
  {
    path: 'quotes/add',
    component: AddQuoteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'quotes',
    component: QuoteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
