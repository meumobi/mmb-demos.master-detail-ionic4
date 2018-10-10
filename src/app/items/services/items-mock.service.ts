import { Item } from './../models/item.interface';
import items from './items-mock';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items$: Observable<Item[]> = of(items.items).pipe(
    delay(2000)
  );
  private currentItem: Item;

  latest():Promise<Item[]> {

    return this.items$.toPromise();
  }

  setCurrentItem(item: Item): Promise<Item> {
    this.currentItem = item;

    return Promise.resolve(this.currentItem);
  }

  getCurrentItem(): Promise<Item> {

    return Promise.resolve(this.currentItem);
  }
}
