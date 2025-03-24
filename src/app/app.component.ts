import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyAngular';
  imageURL = '../assets/BL_logo_square_png.png';

  ngOnInit(): void {
    console.log('Hello from ngOnInit');
    this.title = 'Hello from BridgeLabz.';
  }
}
