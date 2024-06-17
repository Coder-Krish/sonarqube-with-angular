import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodoListComponent]
})
export class AppComponent implements OnInit {
  title: string = '';
  ngOnInit(): void{
    this.title = "Hello World!";
  }
}
