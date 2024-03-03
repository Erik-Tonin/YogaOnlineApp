import { Component, OnInit } from '@angular/core';
import { SubscriptionCancel } from '../shared/components/subscription-cancel';
import { LoginService } from './services/login.service';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends SubscriptionCancel implements OnInit {
  public form: FormGroup = new FormGroup({});
  public loginEfect!: boolean;


  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router) {super(); }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  public login(){
    if (this.form) {
      const email = this.form.controls['email'];
      const password = this.form.controls['password'];
      this.loginService.login(email.value, password.value).pipe(takeUntil(this.destroy$)).subscribe((res) => {
        this.loginEfect = true;
      },
      (error) => {
      });
    } else {
      console.error('O formulário não está inicializado corretamente.');
    }
  }

  public register(){
    this.router.navigate(['/register']);
  }
}
