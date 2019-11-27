import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  add(a1: number, b1: number) {
    console.log(a1 + b1);
    return a1 + b1;
  }

}
