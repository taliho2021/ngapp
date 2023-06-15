import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ngapp-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  activeTab = 1;
}
