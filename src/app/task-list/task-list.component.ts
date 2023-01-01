import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  title = 'todo-list';

  constructor(private route:ActivatedRoute) { }

  newTaskTitle:string = "";

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

  add(taskNgForm: NgForm){

    if(taskNgForm.touched == false)
      return;

    // if(taskNgForm.valid == false)
    //   return; //handling from the form

    this.tasks.push(new Task(this.newTaskTitle))
    taskNgForm.reset({date:this.date}) // reset form but keep the date

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
