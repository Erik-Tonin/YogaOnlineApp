import { Component, OnInit } from '@angular/core';
import { LocalStorageHelper } from '../shared/helpers/local-storage.helper';
import { SubscriptionCancel } from '../shared/components/subscription-cancel';
import { HomeService } from './services/home.service';
import { takeUntil } from 'rxjs/operators';
import { User } from '../user/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  extends SubscriptionCancel implements OnInit {

  public user!: User;


  constructor( 
    private homeService: HomeService,
  ) { super();}

  ngOnInit(): void {
    this.getByEmail(LocalStorageHelper.currentUser);
  }


  public getByEmail(email: string){
    this.homeService.getByEmail(email).pipe(takeUntil(this.destroy$)).subscribe((response) => {
      this.user = response;
      this.user.imageUrl;
    });
  }

}
