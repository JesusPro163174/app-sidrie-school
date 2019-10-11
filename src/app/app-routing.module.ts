import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'subject', loadChildren: './subject/subject.module#SubjectPageModule' },
  { path: 'students/actives', loadChildren: './subject/students/actives/actives.module#ActivesPageModule' },
  { path: 'students/proceso', loadChildren: './subject/students/proceso/proceso.module#ProcesoPageModule' },
  { path: 'students/convalidacion', loadChildren: './subject/students/convalidacion/convalidacion.module#ConvalidacionPageModule' },
  { path: 'students/add-student', loadChildren: './subject/students/add-student/add-student.module#AddStudentPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
