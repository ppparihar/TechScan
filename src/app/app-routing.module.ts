import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'repositories/:id', component: RepoListComponent },
  { path: 'profile/:id', component: ProfileDetailsComponent },
  { path: 'search', component: SearchBarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}