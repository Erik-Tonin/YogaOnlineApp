
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TeacherComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [UserService],
  exports: [
    TeacherComponent,
  ],
})
export class TeacherModule {}
