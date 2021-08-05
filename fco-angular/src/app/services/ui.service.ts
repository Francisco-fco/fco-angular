import { Injectable } from '@angular/core';
import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }


// Call this when we click the Add button
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

// Then subscribe to onToggle()
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
