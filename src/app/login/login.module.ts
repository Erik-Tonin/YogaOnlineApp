
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { UserService } from '../user/services/user.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ],
  providers: [UserService],
  exports: [
    LoginComponent,
  ],
})
export class LoginModule {}
