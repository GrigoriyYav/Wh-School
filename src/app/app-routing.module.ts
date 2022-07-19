import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full',
  },
  { 
    path: 'book',
    loadChildren: () => import('./books/books.module').then((m) => m.BooksModule) 
  },
  { 
    path: 'table', 
    component: TablePageComponent,
    canActivate: [AuthGuard],
    data: {accessToken: "5525-5681-6140-8266"}
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { 
    path: 'charts', 
    component: ChartsPageComponent,
    canActivate: [AuthGuard],
    data: {accessToken: "2720-4044-4713-0021"}
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
