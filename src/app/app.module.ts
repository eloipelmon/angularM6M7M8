import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { FormComponent } from './form/form/form.component';
import { InfoComponent } from './info/info/info.component';
import { HomeComponent } from './home/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioBD } from './servicios/servicioBd.service';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    InfoComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ServicioBD],
  bootstrap: [AppComponent]
})
export class AppModule { }
