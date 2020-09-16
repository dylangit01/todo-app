import { Todo } from './../Model/Todo';
import { Injectable } from '@angular/core';

import {of} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn C++',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '222',
        title: 'Learn React',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '333',
        title: 'Learn Angular',
        isCompleted: false,
        date: new Date()
      },
    ]
   }

   getTodos(){
     return of(this.todos)
   }

   addTodo(todo: Todo){
     this.todos.push(todo)
   }

   updateTodo(todo: Todo){
     this.todos.map(eachTodo => {
       if (eachTodo.id === todo.id) eachTodo.isCompleted = !eachTodo.isCompleted
     })
   }

   // if using below method, we have to add getTodo() in the ts file of the delete method
  //  deleteTodo(todo: Todo){
  //    this.todos = this.todos.filter( todoItem => {
  //     //  console.log(todo + 'has been deleted')
  //      return todoItem.id !== todo.id
  //    })
  //  }

   // if using below method, we dont need to add getTodo() in the ts file of the delete method
   // another way to delete:
    deleteTodoII(todo: Todo){
        const indexOfTodo = this.todos.findIndex(
          item => item.id === todo.id
        );
          this.todos.splice(indexOfTodo,1)
      }
}
