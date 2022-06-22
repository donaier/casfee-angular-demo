import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/order', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
