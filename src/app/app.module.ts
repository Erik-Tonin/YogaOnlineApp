import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HomeModule } from './home/home.module';
import { TeacherModule } from './teacher/teacher.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    LoginModule,
    ReactiveFormsModule,
    HomeModule,
    TeacherModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
