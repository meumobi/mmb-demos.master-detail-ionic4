import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListPage } from './items-list.page';

describe('ItemsListPage', () => {
  let component: ItemsListPage;
  let fixture: ComponentFixture<ItemsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
