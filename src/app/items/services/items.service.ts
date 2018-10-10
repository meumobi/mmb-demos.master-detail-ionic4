import { Item } from '@items/models/item.interface';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private currentItem: Item;
  
  constructor(
    private apiService: ApiService
  ) { 
    console.log("Constructor ItemsService");
  }

  latest():Promise<Item[]> {

    return this.apiService.get('top-headlines', {country: 'us'}).toPromise()
    .then(
      (res: any) => {
        return res.articles;
      }
    );
  }

  setCurrentItem(item: Item): void {
    this.currentItem = item;
  }

  getCurrentItem(): Item {

    return this.currentItem;
  }
}
