import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  goToMyGithub(): void {
    window.open('https://github.com/Dust-Dust')
  }
}
