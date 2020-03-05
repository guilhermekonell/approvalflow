import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SolicitationComponent } from './components/solicitation/solicitation.component';
import { LoginComponent } from './components/login/login.component';
import { ApprovalComponent } from './components/approval/approval.component';

import { SolicitationService } from './services/solicitation.service';


@NgModule({
  declarations: [
    AppComponent,
    SolicitationComponent,
    LoginComponent,
    ApprovalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SolicitationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
