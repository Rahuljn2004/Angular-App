import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyAngular';
  imageURL = '../assets/BL_logo_square_png.png';
  url = 'https://www.bridgelabz.com/';
  username: String = '';

  ngOnInit(): void {
    console.log('Hello from ngOnInit');
    this.title = 'Hello from BridgeLabz.';
  }

  onClick($event: MouseEvent) {
    console.log('Button was clicked!', $event);
    window.open(this.url, '_blank');
  }
}
