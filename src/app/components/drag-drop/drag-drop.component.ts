import { Component, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.sass']
})
export class DragDropComponent implements OnInit {

  inProgress: Task[] = [
    { id: 3, description: 'Task 3' },
    { id: 4, description: 'Task 4' },
    { id: 5, description: 'Task 5' },
    { id: 6, description: 'Task 6' },
  ];
  completed: Task[] = [{ id: 1, description: 'Task 1' }, { id: 2, description: 'Task 2' }];

  envs = {
    inProgress: 0,
    completed: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

  orderPredicate(environment) {
    return (item: CdkDrag<Task>) => {
      if (this.envs[environment] > this.envs[item.dropContainer.id]) {
        return true;
      }
      return false;
    };
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
