import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { AgencyComponent } from '../pages/agency/agency.component';
import { BusesComponent } from '../pages/buses/buses.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { TripComponent } from '../pages/trip/trip.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'buses', component: BusesComponent,
  },
  {
    path: 'trip', component: TripComponent,
  },
  {
    path: 'agency', component: AgencyComponent,
  },
  {
    path: 'profile', component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


})
export class LayoutRoutingModule { }