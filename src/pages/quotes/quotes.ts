import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';



@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup:{category: string, quotes: Quote[], icon:string};
  
  constructor(private navParams: NavParams,
  private alertCtrl:AlertController,
private quotesService: QuotesService){}
  
  ngOnInit(){
    this.quoteGroup = this.navParams.data; 
  }

  onAddToFavorite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title:'Add Quote',
      subTitle:'Are you Sure',
      message:'Are you sure to you want to add to the quote?',
      buttons:[
        {
          text:'yes go ahead',
          handler:()=>{
            this.quotesService.addQuotesToFavorite(selectedQuote);
          }
        },
        {
          text:'No, I changed my mind!',
          role: 'cancel',
          handler:()=>{
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorite(quote: Quote) {
    this.quotesService.removeQuotesToFavorite(quote);
  }
  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
