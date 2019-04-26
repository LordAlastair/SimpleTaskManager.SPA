import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '@env/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskManagerService } from '../task-manager.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager-modal.component.html',
  styleUrls: ['./task-manager-modal.component.scss']
})
export class TaskManagerModalComponent implements OnInit {
  version: string = environment.version;
  task: FormGroup;
  constructor(private service: TaskManagerService, private dialog: MatDialog,
    private ref: MatDialogRef<TaskManagerModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: TaskManagerModalData,
    private formBuilder: FormBuilder) {
    this.task = this.formBuilder.group({
      name: [null, [Validators.required]],
      price: [0],
      deadline: [null]
    });
  }

  ngOnInit() { }

  async salvar() {
    this.ref.close(true);
  }
}


export class TaskManagerModalData {
  operation: Operation;
  id: string;
}

export type Operation = 'edit' | 'create' | 'delete';
