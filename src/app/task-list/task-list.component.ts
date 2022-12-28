import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  title = 'todo-list';

  constructor(private route:ActivatedRoute) { }

  date: Date = new Date();

  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date'])
    console.log(this.date)
  }

   // tasks: string[] = [];
  // task_s = []

  tasks: Task[] = [
    new Task('Practice Angular Project'),
    new Task('Learn NodeJs from Training Videos & YT'),
    new Task('Java-React Programming & Kafka Implementation'),
    new Task('Cover all other Java topics from notes'),
    new Task('Pesto Training')
  ]

  add(newTask:string){ //not persisted yet
    this.tasks.push(new Task(newTask))
  }

  remove(existingTask: Task){ //you can use id here
    var userConfirmed = confirm(`Are you sure, you want to remove the following task? \n ${existingTask.title}`)

    if(userConfirmed){
      this.tasks = this.tasks.filter(task=>task != existingTask);
    }
  }

}

class Task{

  constructor(public title:string){ }

  public isDone = false;

  toggleIsDone(){
    this.isDone = !this.isDone;
  }

}
