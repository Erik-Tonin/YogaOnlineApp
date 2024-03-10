
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [UserService],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule {}
