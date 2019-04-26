import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { TaskManagerComponent } from './component/task-manager.component';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerService } from './task-manager.service';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, TaskManagerRoutingModule],
  declarations: [TaskManagerComponent],
  providers: [TaskManagerService]
})
export class TaskManagerModule {}