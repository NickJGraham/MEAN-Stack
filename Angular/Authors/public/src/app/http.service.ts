import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get("/authors");
  }

  getOneAuthor(id){
    return this._http.get(`/editAuthor/${id}`);
  }

  addAuthor(newAuthor){
    console.log("Adding Author")
      return this._http.post('/authors', newAuthor);
  }

  editAuthor(id, data){
    return this._http.put(`/authors/${id}`, data);
  }

  deleteAuthor(id){
    return this._http.delete(`/delete/${id}`);
  }
}
