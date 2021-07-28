import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { RowComponent } from './description/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescriptionComponent,
    RowComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
