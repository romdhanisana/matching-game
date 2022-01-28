import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app.routes';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: AppRoutes.home, pathMatch: 'full' },
  {path: AppRoutes.board, component: BoardComponent}, 
  { path: AppRoutes.home, component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
