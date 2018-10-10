import { ItemsService } from '@items/services/items-mock.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '@items/models/item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {

  items: Item[]

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.itemsService.latest().then(
      data => this.items = data
    );
  }

  openItem(item: Item) {
    this.itemsService.setCurrentItem(item).then(
      () => this.router.navigate(['items/detail'])
    );
  }
}