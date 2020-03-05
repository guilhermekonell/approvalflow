import { LoginComponent } from './components/login/login.component';
import { SolicitationComponent } from './components/solicitation/solicitation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalComponent } from './components/approval/approval.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'solicitation', component: SolicitationComponent },
  { path: 'approval', component: ApprovalComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
