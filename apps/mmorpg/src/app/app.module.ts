import { PhaserModule } from 'phaser-component-library';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhaserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
