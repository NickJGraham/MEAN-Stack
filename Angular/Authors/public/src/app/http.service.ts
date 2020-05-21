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

  getOneAuthor(id:string){
    return this._http.get("/editAuthor/"+id);
  }

  addAuthor(newAuthor){
    console.log("Adding Author")
      return this._http.post('/authors', newAuthor);
  }

  editAuthor(editAuthor){
    return this._http.put(`/authors/${editAuthor._id}`, editAuthor);
  }

  deleteAuthor(author){
    return this._http.delete(`/delete/${author._id}`, author);
  }
}
