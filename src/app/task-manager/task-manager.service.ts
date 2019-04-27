import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task-manager.model';

@Injectable()
export class TaskManagerService {
  constructor(private http: HttpClient) {}

  public recoverAll() {
    return this.http.get<any[]>('/tasks').toPromise();
  }

  public recoverById(id: string) {
    return this.http.get<any>('/tasks/' + id);
  }

  public create(task: Task) {
    return this.http.post<any>('/tasks/', task).toPromise();
  }

  public update(task: Task) {
    return this.http.put<any>('/tasks/', task).toPromise();
  }

  public delete(id: number) {
    return this.http.delete<any>('/tasks/' + id).toPromise();
  }
}
