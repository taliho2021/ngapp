import { Component, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngapp-ng-content-proj',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-content-proj.component.html',
  styleUrls: ['./ng-content-proj.component.scss'],
})
export class NgContentProjComponent {
  @ContentChild('admin')
  adminTemplate!: TemplateRef<unknown>;
}
