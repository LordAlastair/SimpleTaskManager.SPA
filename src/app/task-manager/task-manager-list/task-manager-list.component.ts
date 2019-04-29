import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { TaskManagerService } from '../task-manager.service';
import { TaskManagerModalComponent, TaskManagerModalData } from '../task-manager-modal/task-manager-modal.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager-list.component.html',
  styleUrls: ['./task-manager-list.component.scss']
})

export class TaskManagerListComponent implements OnInit {
  version: string = environment.version;
  tasks: any[];
  now = Date.now();

  constructor(private service: TaskManagerService, private dialog: MatDialog,
  ) { }

  async ngOnInit() {
    const response = await this.service.recoverAll();
    this.feedTasks(response.data)
  }

  drop(event: CdkDragDrop<string[]>) {
    let taskA = this.tasks[event.previousIndex];
    let taskB = this.tasks[event.currentIndex];
    let aux = taskA.presentation_order;

    taskA.presentation_order = taskB.presentation_order;
    taskB.presentation_order = aux;
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);

    this.service.store(taskA);
    this.service.store(taskB);
  }

  feedTasks(data: any[]) {
    if (!data) {
      return;
    }

    this.tasks = data;
  }

  async delete(task: any) {
    if (confirm("Realmente deseja deletar a tarefa " + name + "?")) {
      const response = await this.service
        .delete(task.id);

      if (response.success) {
        const data = this.tasks;
        const index = data.indexOf(task);
        data.splice(index, 1);
        this.feedTasks(data);
      }
    }
  }

  edit(task: any) {
    const ref = this.dialog.open(TaskManagerModalComponent, {
      width: '800px',
      data: {
        id: task.id,
        operation: 'edit',
        task: task
      }
    });

    ref.afterClosed().subscribe(value => {
      if (!value) {
        return;
      }

      this.service
        .recoverAll()
        .then(response => {
          this.feedTasks(response.data);
        });
    });
  }

  create() {
    const data = new TaskManagerModalData();
    data.operation = 'create';
    const ref = this.dialog.open(TaskManagerModalComponent, {
      width: '800px',
      data: data
    });

    ref.afterClosed().subscribe(value => {
      if (!value) {
        return;
      }

      this.service
        .recoverAll()
        .then(response => {
          this.feedTasks(response.data);
        });
    });
  }
}
