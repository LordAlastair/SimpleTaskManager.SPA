import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { TaskManagerListComponent } from './task-manager-list/task-manager-list.component';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerService } from './task-manager.service';
import { TaskManagerModalComponent } from './task-manager-modal/task-manager-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    TaskManagerRoutingModule,
    ReactiveFormsModule],
  declarations: [
    TaskManagerListComponent,
    TaskManagerModalComponent],
  providers: [TaskManagerService],
  entryComponents: [
    TaskManagerModalComponent
  ]
})
export class TaskManagerModule { }
