import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KalahComponent } from './kalah/kalah.component';

const routes: Routes = [
  { path: '', component: KalahComponent },
  // { path: 'addproduct', component: AddProductComponent,canActivate:[AuthGaurdService]},
  // { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
