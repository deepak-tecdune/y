import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { Quote } from '@angular/compiler';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController){}
  
  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoritesQuotes();
  }
  
  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean) => {
      if(remove)  {
        this.quotesService.removeQuotesToFavorite(quote);
        //this.quotes = this.quotesService.getFavoriteQuotes();
        const position = this.quotes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
      }
    });
    
  }
}
