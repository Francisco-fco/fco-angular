import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  text!: string;
  @Input()
  color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  // By creating an Emitter you can now re-use the button component but give it diffrent functions
  // depending on what you want it to do and where in the project.
  onClick() {
    console.log('We in!')
    this.btnClick.emit();
  }

}
