import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryBookService } from './InMemoryDbService';
import { BooksService } from './Services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent, EditComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryBookService, { delay: 500 }), MatTableModule, MatButtonModule, MatIconModule, RouterModule],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
