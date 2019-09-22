import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {SendEmailComponent} from '../../table-list/send-email.component';
import { AddActionComponent } from '../../typography/add-action.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {AutosizeModule} from 'ngx-autosize';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(AdminLayoutRoutes), FormsModule, ReactiveFormsModule, MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule, AutosizeModule, MatRadioModule,],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    SendEmailComponent,
    AddActionComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
