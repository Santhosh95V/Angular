import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username: any){
    return this.http.get<Todo[]>(`http://localhost:8080/jpa/users/${username}/todos`);
    
  }
  retrieveTodos(username: any ,id: any){
    return this.http.get<Todo>(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  deleteTodo(username: any ,id: any){
    return this.http.delete(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }
  
  updateTodo(username: any , id: any , todo: any){
    return this.http.put(
          `http://localhost:8080/jpa/users/${username}/todos/${id}`
                , todo);
  }

  createTodo(username: any , todo: any ){
    return this.http.post(
      `http://localhost:8080/jpa/users/${username}/todos`
        , todo);
  }


}
