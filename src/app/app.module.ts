import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddlewareGraphModule } from './middleware-graph/middleware-graph.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiddlewareGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
