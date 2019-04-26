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

  tasks = [
    'Artist I - Davido',
    'Artist II - Wizkid',
    'Artist III - Burna Boy',
    'Artist IV - Kiss Daniel',
    'Artist V - Mayorkun',
    'Artist VI - Mr. Eazi',
    'Artist VII - Tiwa Savage',
    'Artist VIII - Blaqbonez',
    'Artist IX - Banky W',
    'Artist X - Yemi Alade',
    'Artist XI - Perruzi',
    'Artist XII - Seyi Shay',
    'Artist XIII - Teni'
  ];

  constructor(private service: TaskManagerService, private dialog: MatDialog) {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  novo() {
    const ref = this.dialog.open(TaskManagerModalComponent, {
      width: '800px'
    });
  }
}
