import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Routes, RouterModule,ActivatedRoute, RouterLinkActive } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { UserService } from './components/services/user.service';

const routes:Routes=[
  {path:"home" ,component:HomePageComponent},
  {path:"login" ,component:LoginPageComponent},
  {path:"login" ,component:LoginPageComponent},
  {path:"users/login" ,component:LoginPageComponent},
  {path:"users/login/:id" ,component:LoginPageComponent},

  {path:"users" ,component:UsersComponent},
  {path:"**" ,component:NotFoundPageComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundPageComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterLinkActive,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
