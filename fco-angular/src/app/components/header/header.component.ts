import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'FCO - Påminnelse';
  showAddTask: boolean = true;
  subscription: Subscription;


  constructor(private uiService:UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
   }

  //Lifecycle method
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('VÄXLAR');
    this.uiService.toggleAddTask();
  }

}
