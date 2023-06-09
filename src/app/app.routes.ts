import { NgTemplateComponent } from 'src/ng-template/ng-template.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
   {
        path: '',
        component: NxWelcomeComponent,  
        pathMatch: 'full'
   },
   {
        path: 'ng',
        component: NgTemplateComponent,
        }
    ];
