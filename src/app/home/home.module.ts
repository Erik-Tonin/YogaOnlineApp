
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [UserService],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule {}
