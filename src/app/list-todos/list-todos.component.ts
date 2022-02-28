import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../servcie/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done : boolean,
    public targetDate :Date 
    )
  {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos!: Todo[];
  message: any;

  constructor(private todoService:TodoDataService,
    private route:Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }


  refreshTodos(){
    this.todoService.retrieveAllTodos('test').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo('test', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: any) {
    console.log(`update ${id}`)
    this.route.navigate(['todos',id])
  }

  addTodo() {
    this.route.navigate(['todos',-1])
  }

}
