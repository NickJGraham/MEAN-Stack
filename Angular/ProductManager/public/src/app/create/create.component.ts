import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  products = [];
  newProduct: any;
  error: "";

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newProduct = {title: "", price: 0.00, image: ""};
    this.getTasksFromService();

  }

  getTasksFromService() {
    let observable = this._httpService.getAllProducts();
    observable.subscribe((data) => {
      this.products = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe((data: any) => {
      if (data.error) {
        this.error = data.error.errors.name.message;
      } else {
        this.newProduct = { title: "", price: 0.00, image: "" };
        this.getTasksFromService();
        this._router.navigate(["/products"]);
      }
    });
  }
}