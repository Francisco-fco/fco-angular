import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    
    // http är kopplad med http: i contructorn. 
    return this.http.get<Task[]>(this.apiUrl);
    
  }
}
