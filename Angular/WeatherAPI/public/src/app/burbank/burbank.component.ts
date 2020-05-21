import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.scss']
})
export class BurbankComponent implements OnInit {
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
