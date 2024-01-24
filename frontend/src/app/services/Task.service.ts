import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

export class TaskService {

  constructor(private url: string, private http: HttpClient) { this.url = "http://localhost:8081/api/task" }

  add(task: any): Observable<any> {
    return this.http.post<Task>(this.url, task)
  }
  get(id: any): Observable<any> {
    return this.http.get<Task>(this.url + "/" + id)
  }
  all(): Observable<any> {
    return this.http.get<Task[]>(this.url)
  }
  del(id: any): Observable<any> {
    return this.http.delete<Task>(this.url + "/" + id)
  }
}
