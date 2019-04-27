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
  operation: string;
  constructor(private service: TaskManagerService, private dialog: MatDialog,
    private ref: MatDialogRef<TaskManagerModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: TaskManagerModalData,
    private formBuilder: FormBuilder) {
    this.task = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      price: [0],
      deadline: [null]
    });
  }

  ngOnInit() {
    this.operation = this.data.operation;
    if (this.operation !== 'create') {
      this.service.recoverById(this.data.id)
        .subscribe(response => {
          this.feedForm(response);
        });
    }
  }

  feedForm(data: any) {
    if (!data) {
      return;
    }

    this.task.get('id').setValue(data.id);
    this.task.get('name').setValue(data.name);
    this.task.get('price').setValue(data.price);
    this.task.get('deadline').setValue(data.deadline);
  }

  async salvar() {
    if (this.operation === 'edit') {
      this.service.update(this.task.value).then(response => {
        this.ref.close(true);
      });
    }
    else {
      this.service.create(this.task.value).then(response => {
        this.ref.close(true);
      });
    }
  }
}


export class TaskManagerModalData {
  operation: Operation;
  id: string;
}

export type Operation = 'edit' | 'create';
