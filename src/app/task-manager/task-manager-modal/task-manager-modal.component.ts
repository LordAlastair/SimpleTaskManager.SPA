import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { environment } from '@env/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskManagerService } from '../task-manager.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../task-manager.model';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager-modal.component.html',
  styleUrls: ['./task-manager-modal.component.scss']
})
export class TaskManagerModalComponent implements OnInit {
  version: string = environment.version;
  task: FormGroup;
  operation: string;
  constructor(private service: TaskManagerService, private dialog: MatDialog,
    private ref: MatDialogRef<TaskManagerModalComponent>, private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private data: TaskManagerModalData,
    private formBuilder: FormBuilder) {
    this.task = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      price: [0],
      deadline: [0],
      presentation_order: [0],
      done: [false]
    });
  }

  async ngOnInit() {
    this.operation = this.data.operation;
    if (this.operation !== 'create') {
      this.feedForm(this.data.task);
    }
  }

  close() {
    this.ref.close(true);
  }

  feedForm(data: any) {
    if (!data) {
      return;
    }

    this.task.get('id').setValue(data.id);
    this.task.get('name').setValue(data.name);
    this.task.get('price').setValue(data.price);
    this.task.get('deadline').setValue(data.deadline);
    this.task.get('done').setValue(data.done);
    this.task.get('presentation_order').setValue(data.presentation_order);
  }

  async persist() {
    this.service.store(this.task.value).then(response => {
      this.ref.close(true);
    });
  }
}

export class TaskManagerModalData {
  operation: Operation;
  task: Task;
}

export type Operation = 'edit' | 'create';
