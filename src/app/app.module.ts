import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTES } from './app.routes';

// Services
import { OpenWeatherService } from './services/open-weather.service';


// Components
import { AppComponent } from './app.component';
import { ReminderComponent } from './pages/reminder/reminder.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
    CalendarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [
    OpenWeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
