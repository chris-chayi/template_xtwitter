import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TweetComponent} from './tweet/tweet.component';
import {IonicModule} from "@ionic/angular";

@NgModule({
    declarations: [TweetComponent],
    imports: [
        CommonModule, IonicModule.forRoot()
    ],
    exports: [TweetComponent]
})
export class SharedComponentsModule {
}
