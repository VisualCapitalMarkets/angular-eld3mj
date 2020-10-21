import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { KiosqueComponent } from './pages/kiosque/kiosque.component';
import { SplashScreenComponent } from './pages/splash-screen/splash-screen.component';


const routes: Routes = [
  {
    path: '',
    component: KiosqueComponent
  },
  {
    path: 'collection/:id',
    component: LayoutComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    //   }
    // ]
  },
  {
    path: 'splash-screen',
    component: SplashScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
