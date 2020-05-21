import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.scss']
})
export class DCComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.city = { name: ""};
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("Washington");
    observable.subscribe((data) => {
      this.city = data;
    })
  }
}
