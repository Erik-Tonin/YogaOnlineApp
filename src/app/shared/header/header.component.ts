import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SubscriptionCancel } from '../components/subscription-cancel';
import { LocalStorageHelper } from '../helpers/local-storage.helper';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends SubscriptionCancel implements OnInit {

  constructor(private router: Router) { super();}

  ngOnInit(): void {
  }

  logout() {
    Swal.fire({
      title: 'Você realmente deseja sair?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff4c06',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sair',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        LocalStorageHelper.removeAll();
        // this.cookieService.deleteAll();
        // this.router.navigate([environment.URL_LOGIN]);
      }
    });
  }
}
