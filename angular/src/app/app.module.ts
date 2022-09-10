import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HeaderComponent } from './Components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { Reducers } from './Store/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffet } from './Store/Effects/todoEffect';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutUsComponent,
    ForgetPasswordComponent,
    NavbarComponent,
    NotfoundComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(Reducers),
    EffectsModule.forRoot([TodoEffet]) ,
    TranslateModule.forRoot({
      defaultLanguage: "ar" ,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http , "./assets/i18n/" , ".json");
}
