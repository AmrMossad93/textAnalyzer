import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "text-analyzer",
    pathMatch: "full",
  },
  {
    path: '',
    loadChildren: () => import('./Modules/Main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
