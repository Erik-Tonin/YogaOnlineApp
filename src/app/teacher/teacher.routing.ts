import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeacherComponent } from "./teacher.component";


export const ROUTES: Routes = [
  { path: 'teacher', component: TeacherComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule],
})

export class TeacherRoutingModule {}
