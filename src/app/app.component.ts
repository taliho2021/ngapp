import { Component } from '@angular/core';
import { NgContentProjComponent } from './ng-content-proj/ng-content-proj.component';
import { NgTemplateComponent } from '../ng-template/ng-template.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgTemplateComponent, NgContentProjComponent, TabsComponent],
  selector: 'ngapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngapp';
}
