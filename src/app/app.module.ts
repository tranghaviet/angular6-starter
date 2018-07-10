import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';

@NgModule({
  // Components
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  // modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  // Services
  providers: [
    // AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
