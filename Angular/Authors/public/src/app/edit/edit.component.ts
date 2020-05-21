import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  author: any;
  editName: any;
  error: any;


  constructor(private _httpService: HttpService, private _router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findAuthor();
    this.editName = {name: ""}
    this.author = {author: {name: ""}}
  }

  findAuthor(){
    this._route.params.subscribe((params) => {
      console.log("This ID in the URL is:", params["id"])
      let observable = this._httpService.getOneAuthor(params["id"]);
      observable.subscribe((data: any) => {
        this.author = data;
        console.log("Working, finding author", this.author);
      })
    })
  }

  editSubmit(){
    this._route.params.subscribe((params)=>{
      let observable = this._httpService.editAuthor(params['id']);
      observable.subscribe((data:any) => {
        if(data.error){
          this.error = data.error.errors.name.message
        }
        else{
          console.log("editing");
          this._router.navigate(['/home']);
        }
      })
    })
  }

}
