import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerListComponent } from './task-manager-list.component';

describe('TaskManagerComponent', () => {
  let component: TaskManagerListComponent;
  let fixture: ComponentFixture<TaskManagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManagerListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
