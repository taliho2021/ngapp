import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'ngapp-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  activeTab = 1;
}
