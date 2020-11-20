import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import 'moment/locale/en';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() {
    // this.getDates();
  }

  ngOnInit(): void {
  }

  getDates(): void{
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();
    const year = today.getFullYear();
    const days = this.daysInMonth(month, year);
    console.log(today.getDay());
    console.log(days);
  }

  daysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  // TO Do
  // Crear un arreglo para guardar los dias del mes para
  // despues pintarlos en html


  goReminder(): void{
    console.log('Enter to reminder');
  }

}
