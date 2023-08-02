import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TweetDetailsPage } from './tweet-details.page';

const routes: Routes = [
  {
    path: '',
    component: TweetDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TweetDetailsPageRoutingModule {}
