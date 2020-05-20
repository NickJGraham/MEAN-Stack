import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cake = "";
  cakes = [];
  newCake: any;
  newRating: any;
  selectedCake;
  avg;

  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
    this.getCakesFromService()
    this.newCake = { baker: "", image: ""};
    this.newRating = { rating: "", comment: ""};
  }

  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log('Cakes', data)
      this.cakes = data['cake']
    });
  }

  cakeSubmit(){
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Submitting The Cake!")
    })
    this.newCake = { baker: "", image: ""}
    this.getCakesFromService();
  }

  ratingSubmit(cakeId){
    console.log(cakeId);
    let observable = this._httpService.addRating(this.newRating, cakeId);
    observable.subscribe(data => {
      console.log("Adding a new Rating!")
    })
    this.newRating = { rating: "", comment: ""}
    this.getCakesFromService();
  }

  info(idx){
    this.selectedCake = this.cakes[idx];
    var sum = 0
    for(var i = 0; i<this.selectedCake.ratings.length; i++){
      sum += this.selectedCake.ratings[i].rating;
    }
    this.avg = sum/this.selectedCake.ratings.length;
  }
}
