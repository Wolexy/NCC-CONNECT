import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseModule } from './case/module/case.module';
import { RoutingModule } from './case/module/routing.modules';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CaseModule,
    BrowserModule,
    RoutingModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
