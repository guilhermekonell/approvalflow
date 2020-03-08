import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgxCurrencyModule } from "ngx-currency";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SolicitationComponent } from './components/solicitation/solicitation.component';
import { LoginComponent } from './components/login/login.component';
import { ApprovalComponent } from './components/approval/approval.component';

import { SolicitationService } from './services/solicitation.service';
import { ApprovalListComponent } from './components/approval-list/approval-list.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    SolicitationComponent,
    LoginComponent,
    ApprovalComponent,
    ApprovalListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxCurrencyModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    SolicitationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
