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
import { CartService } from './services/items.service';
import { PaintCreateComponent } from './components/paint-create/paint-create.component';
import { PaintEditComponent } from './components/paint-edit/paint-edit.component';
import { PaintDetailComponent } from './components/paint-detail/paint-detail.component';
import { BrushCreateComponent } from './components/brush-create/brush-create.component';
import { BrushDetailComponent } from './components/brush-detail/brush-detail.component';
import { BrushEditComponent } from './components/brush-edit/brush-edit.component';
import { RollerPanComponent } from './components/roller-pan/roller-pan.component';
import { RollerPanCreateComponent } from './components/roller-pan-create/roller-pan-create.component';
import { RollerPanDetailComponent } from './components/roller-pan-detail/roller-pan-detail.component';
import { RollerPanEditComponent } from './components/roller-pan-edit/roller-pan-edit.component';



const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'dashboard',component: DashboardComponent, data:{cart:ShoppingCartComponent}},
  {path:'profile',component: ProfileComponent},
  {path:'inventory',component: InventoryComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path: 'brush', component:BrushComponent, data: {title: 'Brush List'}},
  {path: 'brush-create', component:BrushCreateComponent, data: {title: 'Create Brush'}},
  {path: 'brush-detail/:id', component:BrushDetailComponent, data: {title: 'Detail Brush'}},
  {path: 'brush-edit/:id', component:BrushEditComponent, data: {title: 'Edit Brush'}},
  {path: 'paint', component:PaintComponent, data: {title: 'Paint List'}},
  {path: 'roller', component:RollerComponent, data: {title: 'Roller List'}},
  {path: 'roller-create', component:RollerCreateComponent, data: {title: 'Create Roller'}},
  {path: 'roller-edit/:id', component:RollerEditComponent, data: {title: 'Edit Roller'}},
  {path: 'roller-detail/:id',component: RollerDetailComponent,data: { title: 'Paint Details' }},
  {path: 'paints',component: PaintComponent,data: { title: 'Paint List' }},
  {path: 'paint-details/:id',component: PaintDetailComponent,data: { title: 'Paint Details' }},
  {path: 'paint-create',component: PaintCreateComponent,data: { title: 'Create Paint' }},
  {path: 'paint-edit/:id',component: PaintEditComponent,data: { title: 'Edit Paint' }},
  {path: 'roller-pan',component: RollerPanComponent,data: { title: 'Roller List' }},
  {path: 'roller-pan-detail/:id',component: RollerPanDetailComponent,data: { title: 'Roller Details' }},
  {path: 'roller-pan-create',component: RollerPanCreateComponent,data: { title: 'Create Roller' }},
  {path: 'roller-pan-edit/:id',component: RollerPanEditComponent,data: { title: 'Edit Roller' }},
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
    BrushCreateComponent,
    PaintComponent,
    RollerComponent,
    RollerDetailComponent,
    RollerCreateComponent,
    RollerEditComponent,
    PaintCreateComponent,
    PaintEditComponent,
    PaintDetailComponent,
    BrushDetailComponent,
    BrushEditComponent,
    RollerPanComponent,
    RollerPanCreateComponent,
    RollerPanDetailComponent,
    RollerPanEditComponent,

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
  providers: [ValidateService, AuthService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
