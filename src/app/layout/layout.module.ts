import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { AgencyComponent } from '../pages/agency/agency.component';
import { BusesComponent } from '../pages/buses/buses.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { TripComponent } from '../pages/trip/trip.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    BusesComponent,
    AgencyComponent,
    ProfileComponent,
    TripComponent
  ],
  imports: [
    FormsModule,
    LayoutRoutingModule
  ],
})

export class LayoutModule { }


