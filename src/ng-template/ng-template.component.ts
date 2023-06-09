import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngapp-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss'],
})
export class NgTemplateComponent {
  @ViewChild('myContainer1', { read:ViewContainerRef }) container1!: ViewContainerRef
  @ViewChild('myTemplate1', { read: TemplateRef }) template1!: TemplateRef<unknown>
  @ViewChild('myContainer2', { read:ViewContainerRef }) container2!: ViewContainerRef
  @ViewChild('myTemplate2', { read:TemplateRef }) template2!: TemplateRef<unknown>
  @ViewChild('myContainer3', { read:ViewContainerRef }) container3!: ViewContainerRef
  @ViewChild('myTemplate3', { read:TemplateRef }) template3!: TemplateRef<unknown>
  
  showTemplate1() : void {
    this.container1.createEmbeddedView(this.template1)
  }

  showTemplate2() : void {  
    this.container2.createEmbeddedView(this.template2)
  }
  
  showTemplate3() : void {  
    this.container3.createEmbeddedView(this.template3)
  }
}
