import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  add(task: any): Observable<Task> {
    return this.http.post<Task>(task, this.url)
  }
  get(id: string): Observable<Task> {
    return this.http.get<Task>(this.url + "/" + id)
  }
  all(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url)
  }
  del(id: string): Observable<any> {
    return this.http.delete<Task>(this.url + "/" + id)
  }
}
