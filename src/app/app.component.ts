import { Component,ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginScreenComponent,DashBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom

})
export class AppComponent {
  title = 'AnimeWeb';
}
