import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

export const ROUTES: Routes = [
  { path: "register", component: UserComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule],
})

export class UserRoutingModule {}
