import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'search', canActivate:[AuthGuardService], component: SearchComponent,children:[
    { path: 'results/:id', component: ResultsComponent},
    {path: 'results', component: ResultsComponent}
  ]},
  {path: '**', redirectTo: '/'},
  {path: 'not-found', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports:[
    RouterModule
  ],
  providers:[
    // AuthGuardService, AuthService
  ]
})
export class AppRoutingModule { }
