import { ItemsService } from '@items/services';
import { Item } from '@items/models/item.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.itemsService.getCurrentItem().then(
      item => this.item = item
    );
    //this.id = this.route.snapshot.paramMap.get('id');
  }

}
