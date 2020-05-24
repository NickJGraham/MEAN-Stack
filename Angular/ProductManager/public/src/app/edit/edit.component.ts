import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  product: any;
  editProduct: any;
  error: any;


  constructor(private _httpService: HttpService, private _router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findProduct();
    this.editProduct = {title: "", price: 0.00, image: "" };
  }

  findProduct(){
    this._route.params.subscribe((params) => {
      console.log("This ID in the URL is:", params["id"])
      let observable = this._httpService.getOneProduct(params["id"]);
      observable.subscribe((data: any) => {
        this.product = data;
        console.log("Working, finding author", this.editProduct);
      })
    })
  }

  editSubmit(){
    this._route.params.subscribe((params)=>{
      let observable = this._httpService.editProduct(params['id'], this.editProduct);
      observable.subscribe((data:any) => {
        if(data.error){
          this.error = data.error.errors.name.message
        }
        else{
          console.log("Edit");
          this._router.navigate(['/products']);
        }
      })
    })
  }

}