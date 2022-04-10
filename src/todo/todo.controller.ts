import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from './todo.service';
@Controller({
  path: 'todo',
  version: '1',
})
export class TodoController {
  constructor(private todoService: TodoService) {
  }
  todos: Todo[] = [];
  @Get()
  getTodos(@Req() request: Request): Todo[] {
    // console.log(request);
    return this.todos;
  }
  @Post()
  addTodo(@Body() newTodoData: Todo): Todo {
    let todo = new Todo();
    todo.id = uuidv4();
    todo = { ...todo, ...newTodoData };
    this.todos.push(todo);
    return todo;
  }
  @Get('version')
  version() {
    return '1';
  }
}
