import { Component, OnInit } from '@angular/core';
import { SubscriptionCancel } from '../shared/components/subscription-cancel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { takeUntil } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  extends SubscriptionCancel implements OnInit {

  public form: FormGroup = new FormGroup({});
  public name!: string;
  public email!: string;
  public cpf!: string;
  public birthday!: Date;
  public password!: string;
  public passwordRepeat!: string;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,) {super(); }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      birthday: [null, Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  private getFormData(): FormData {
    const formData = new FormData();

    formData.append('name',  this.form.controls['name'].value);
    formData.append('email', this.form.controls['email'].value);
    formData.append('cpf', this.form.controls['cpf'].value);
    formData.set('birthday', formatDate(this.form.value.birthday, 'yyyy-MM-dd', navigator.language));
    formData.append('password', this.form.controls['password'].value);
    formData.append('confirmPassword', this.form.controls['confirmPassword'].value);

    return formData;
  }

  public submit(): void {

    const formData = this.getFormData();

    this.register(formData);
  }

  register(formData: FormData): void{
      this.registerService.register(formData).pipe(takeUntil(this.destroy$)).subscribe((res) => {    
        this.router.navigate(['/login']);
      },
      (error) => {
      });
  }
}
