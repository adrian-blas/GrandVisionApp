import { RouterModule, Routes } from '@angular/router';

// Components
import { ReminderComponent } from './pages/reminder/reminder.component';
import { CalendarComponent } from './pages/calendar/calendar.component';




const appRoutes: Routes = [
    { path: 'reminder/:id', component: ReminderComponent },
    { path: '', component: CalendarComponent },
    // { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
