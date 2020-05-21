import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.scss']
})
export class SanJoseComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  city: any;

  ngOnInit() {
    this.city = { name: "" };
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("Chicago, US");
    observable.subscribe((data) => {
      this.city = data;
    });
  }
}
