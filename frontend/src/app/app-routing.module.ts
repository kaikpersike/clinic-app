import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudCustomerComponent } from './components/crud-customer/crud-customer.component';
import { HomeComponent } from './components/home/home.component';
import { CrudEmployeeComponent } from './components/crud-employee/crud-employee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'components/crud-customer', component: CrudCustomerComponent },
  { path: 'components/crud-employee', component: CrudEmployeeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }