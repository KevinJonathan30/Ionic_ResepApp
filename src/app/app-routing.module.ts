import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tambahresep',
    loadChildren: () => import('./tambahresep/tambahresep.module').then( m => m.TambahresepPageModule)
  },
  {
    path: 'detresep/:idresep',
    loadChildren: () => import('./detresep/detresep.module').then( m => m.DetresepPageModule)
  },
  {
    path: 'datafirebase',
    loadChildren: () => import('./datafirebase/datafirebase.module').then( m => m.DatafirebasePageModule)
  },
  {
    path: 'det/:idresep',
    loadChildren: () => import('./det/det.module').then( m => m.DetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
