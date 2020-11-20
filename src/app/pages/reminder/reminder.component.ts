import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Reminder } from '../../models/reminder.model';
import { OpenWeatherService } from '../../services/open-weather.service';

import { OpenWeather, Weather, List } from '../../models/open-weather.model';

// ES6 Modules or TypeScript
import swal from 'sweetalert2';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  reminderModel: Reminder = {
    id: '',
    text: '',
    date: '',
    time: '',
    city: '',
    color: ''
  };

  openWeather: OpenWeather;
  listCities: List [] = [];
  weather: Weather[] = [];
  loadCity = false;
  loadWeather = false;
  idParams = '';
  cityName = '';

  constructor( private openWeatherService: OpenWeatherService, private router: Router,
               private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( (params: {id: string}) => {
      this.idParams = params.id;
    });
  }

  ngOnInit(): void {
    this.getOpenWeatherService();
  }

  saveReminder( form: NgForm ): void{

    this.reminderModel.id = new Date().getTime().toString();
    this.reminderModel.text = form.value.text;
    this.reminderModel.date = form.value.date;
    this.reminderModel.time = form.value.time;
    this.reminderModel.color = form.value.color;
    this.reminderModel.city = this.cityName;

    localStorage.setItem(`${this.reminderModel.id}`, JSON.stringify(this.reminderModel));
    swal.fire('Save successful', 'You have saved reminder correctly in Local Storage', 'success');

  }

  getOpenWeatherService(): void{
    this.openWeatherService.getWeather().subscribe( (resp: any) => {
      this.openWeather = resp;
      this.listCities = resp[0].list;
      this.loadCity = true;
    });
  }

  changeCity( idWeatherString: string ): void{
    this.loadWeather = false;
    this.weather = [];

    // tslint:disable-next-line: radix
    const idWeather: number = parseInt(idWeatherString);

    if ( idWeather > 0 ){
      for (const cities of this.listCities ){
        if ( cities.id === idWeather ){
          this.weather.push(cities.weather[0]);
          this.cityName = cities.name;
        }
      }
      this.loadWeather = true;
    }else { return; }

  }

  changeColor(color: string): void{
    if ( color !== '' ){
      this.reminderModel.color = color;
    }else { return; }
  }

  // goCalenda(): void{
  //   this.router.navigate(['/']);
  // }

}
