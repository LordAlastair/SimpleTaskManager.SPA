import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { TaskManagerService } from '../task-manager.service';
import { TaskManagerModalComponent } from '../task-manager-modal/task-manager-modal.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager-list.component.html',
  styleUrls: ['./task-manager-list.component.scss']
})

export class TaskManagerListComponent implements OnInit {
  version: string = environment.version;
  tasks: any[];
  now = Date.now();

  constructor(private service: TaskManagerService, private dialog: MatDialog) { }

  async ngOnInit() {
    const response = await this.service.recoverAll();
    this.feedTasks(response)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  feedTasks(data: any[]) {
    if (!data) {
      return;
    }

    this.tasks = data;
  }


  novo() {
    const ref = this.dialog.open(TaskManagerModalComponent, {
      width: '800px'
    });
  }
}
