import { Component, OnInit } from '@angular/core';

export class Todo
{
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  )
  {

  }
}
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos=[
    new Todo(1,"Learn Angular In-depth",false,new Date),
    new Todo(2,"Learn Spring boot In-depth",false,new Date),
    new Todo(3,"Know your current project completely",false,new Date),
    new Todo(4,"Learn Java8 In-depth",false,new Date),
    new Todo(5,"Learn testing frameworks",false,new Date)  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
