import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', loadChildren: './pages/items-list/items-list.module#ItemsListPageModule' },
  { path: 'detail', loadChildren: './pages/item-detail/item-detail.module#ItemDetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
