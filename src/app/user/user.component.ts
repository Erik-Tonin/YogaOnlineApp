import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { takeUntil } from 'rxjs';
import { SubscriptionCancel } from '../shared/components/subscription-cancel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends SubscriptionCancel implements OnInit {

  constructor(private userService: UserService) { super();}

  ngOnInit(): void {
  }


  public test() {
    this.userService.getAll().pipe(takeUntil(this.destroy$)).subscribe((response) => {
        // Lógica de sucesso
      },
      (error) => {
        // Lógica de erro
      }
    );
  }

}
