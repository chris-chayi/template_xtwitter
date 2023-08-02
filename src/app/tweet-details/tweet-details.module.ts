import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TweetDetailsPageRoutingModule } from './tweet-details-routing.module';

import { TweetDetailsPage } from './tweet-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TweetDetailsPageRoutingModule
  ],
  declarations: [TweetDetailsPage]
})
export class TweetDetailsPageModule {}
