import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerModalComponent } from './task-manager-modal.component';

describe('TaskManagerComponent', () => {
  let component: TaskManagerModalComponent;
  let fixture: ComponentFixture<TaskManagerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManagerModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
