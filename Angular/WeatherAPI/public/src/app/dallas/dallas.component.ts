import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss']
})
export class DallasComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.city = { name: ""};
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("Burbank");
    observable.subscribe((data) => {
      this.city = data;
    })
  }
}
