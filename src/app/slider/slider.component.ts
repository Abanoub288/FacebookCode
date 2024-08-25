import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  isClick : boolean = false


  seeMore() {
    this.isClick = true
  }

  seeLess() {
    this.isClick = false
  }
}
