import { Component } from '@angular/core';
import { NgTemplateComponent } from '../ng-template/ng-template.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgTemplateComponent],
  selector: 'ngapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngapp';
}
