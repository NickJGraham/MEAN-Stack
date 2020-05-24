
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get("/products");
  }

  getOneProduct(id){
    return this._http.get(`/editproduct/${id}`);
  }

  addProduct(newProduct){
    console.log("Adding Product")
      return this._http.post('/products', newProduct);
  }

  editProduct(id, data){
    return this._http.put(`/products/${id}`, data);
  }

  deleteProduct(id){
    return this._http.delete(`/delete/${id}`);
  }
}