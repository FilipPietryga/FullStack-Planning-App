import { TaskService } from './../../services/Task.service';
import { Component } from '@angular/core';
import { Task } from '../../models/Task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task.component.html'
})
export class TaskComponent {
  tasks: Task[] = [];
  modified: Task = new Task();
  constructor(private taskService : TaskService){
    this.all();
  }
  all(){
    this.taskService.all().subscribe((response : Task[])=>{
      this.tasks = response;
    });
  }

  add(){
    const task = {
      title : this.modified.title,
      desription : this.modified.description,
      id : this.modified.id,
    };
    this.taskService.add(task).subscribe(()=>{
      console.log("A Task has been added");
      window.location.reload();
    });
  }

  del(id : string){
    this.taskService.del(id).subscribe(()=>{
      console.log("A Task has been deleted");
      window.location.reload();
    });
  }
}
