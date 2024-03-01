
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  exports: [
    UserComponent,
  ],
})
export class UserModule {}
