import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BrushComponent } from './components/brush/brush.component';
import { PaintComponent } from './components/paint/paint.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule } from "@angular/material";
import { RollerComponent } from './components/roller/roller.component';
import { RollerDetailComponent } from './components/roller-detail/roller-detail.component';
import { RollerCreateComponent } from './components/roller-create/roller-create.component';
import { RollerEditComponent } from './components/roller-edit/roller-edit.component';
import { PaintCreateComponent } from './components/paint-create/paint-create.component';
import { PaintEditComponent } from './components/paint-edit/paint-edit.component';
import { PaintDetailComponent } from './components/paint-detail/paint-detail.component';


const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'profile',component: ProfileComponent},
  {path:'inventory',component: InventoryComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path: 'brush', component:BrushComponent, data: {title: 'Brush List'}},
  {path: 'paint', component:PaintComponent, data: {title: 'Paint List'}},
  {path: 'roller', component:RollerComponent, data: {title: 'Roller List'}},
  {path: 'roller-create', component:RollerCreateComponent, data: {title: 'Create Roller'}},
  {path: 'roller-edit', component:RollerEditComponent, data: {title: 'Edit Roller'}},
  {
    path: 'paints',
    component: PaintComponent,
    data: { title: 'Paint List' }
  },
  {
    path: 'paint-details/:id',
    component: PaintDetailComponent,
    data: { title: 'Paint Details' }
  },
  {
    path: 'paint-create',
    component: PaintCreateComponent,
    data: { title: 'Create Paint' }
  },
  {
    path: 'paint-edit/:id',
    component: PaintEditComponent,
    data: { title: 'Edit Paint' }
  },
  {
    path: '',
    redirectTo: '/paints',
    pathMatch: 'full'
  }
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    InventoryComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    BrushComponent,
    PaintComponent,
    RollerComponent,
    RollerDetailComponent,
    RollerCreateComponent,
    RollerEditComponent,
    PaintCreateComponent,
    PaintEditComponent,
    PaintDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
