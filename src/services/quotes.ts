import { Quote } from "../data/quotes.interface";
import { TitleCasePipe } from "@angular/common";

export class QuotesService{
  getFavoriteQuotes(): any {
    throw new Error("Method not implemented.");
  }
    private favoriteQuotes: Quote[] = [];
    
    addQuotesToFavorite(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuotesToFavorite(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote)=>{
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoritesQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }
}