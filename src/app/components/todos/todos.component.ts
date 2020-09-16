import { TodoService } from '../../service/todo.service';

import { Todo } from '../../Model/Todo';
import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  faTrashAlt = faTrashAlt;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  updateTodoStatus(todo: Todo){
    this.todoService.updateTodo(todo)
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodoII(todo)
    // this.todoService.getTodos().subscribe(items => this.todos = items)
  }

}
