import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { ArticleComponent } from './pages/article/article.component';
import { LoginComponent } from './pages/login/login.component';
import { 
  AuthGuard
} from './guards/auth.guard';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "article/:id", component: ArticleComponent },
  {path: "admin", component: AdministratorComponent, canActivate: [AuthGuard] },

  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
