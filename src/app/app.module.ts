import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashbordOverviewComponent } from './dashbord-overview/dashbord-overview.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAlertComponent } from './create-alert/create-alert.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { MyAlertsComponent } from './my-alerts/my-alerts.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';
import { HelpComponent } from './help/help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { DashSidenavComponent } from './dash-sidenav/dash-sidenav.component';
import{MatMenuModule} from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import{MatDividerModule} from '@angular/material/divider';
import{MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    DashbordOverviewComponent,
    HeaderComponent,
    FooterComponent,
    CreateAlertComponent,
    AlertModalComponent,
    MyAlertsComponent,
    EditAccountsComponent,
    HelpComponent,
    DashHeaderComponent,
    DashHomeComponent,
    DashSidenavComponent,
  
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
