import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AcnhLoversComponent} from './acnh-lovers/acnh-lovers.component';

const appRoutes: Routes = [

  {path: 'user', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)},
  {path: 'acnh', component: AcnhLoversComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', redirectTo: '/not_found', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- Use true for debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class MicroLogisticsRoutingModule {
}
