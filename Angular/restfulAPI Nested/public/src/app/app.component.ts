import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks: any = [];
  task = "";
  selectedTask;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
  }
  getTasksFromService(){  
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data['task'];
    });
  }

  info(task){
    this.task = task;
  } 
}

