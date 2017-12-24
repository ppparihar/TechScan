import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RepositoryService } from './repository.service';
import { RepoListComponent } from './repo-list/repo-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RepoListComponent,
    ProfileDetailsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RepositoryService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
