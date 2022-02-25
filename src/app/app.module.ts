import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from '../footer/footer.component';
import { UserDataService } from '../user-data.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FooterComponent],
  providers: [UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
