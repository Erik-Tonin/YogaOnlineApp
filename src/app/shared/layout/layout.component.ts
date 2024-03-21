import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isAdmin: boolean = true; 

  menuList = [
    { name: 'Home', icon: 'bi-house', route: 'home', isAdmin: false  },
    { name: 'Professores', icon: 'bi-stack', route: 'teacher', isAdmin: false },
    { name: 'Usuários', icon: 'bi-people', route: 'users', isAdmin: true },
    {
      name: 'Configurações',
      icon: 'bi-gear',
      route: '',
      isAdmin: false,
      subMenuItems: [
        { name: 'Gerenciar usuários', subRoute: 'brand/manage' },
        { name: 'Alterar senha', subRoute: 'brand/change-password' },
      ],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {}

  isHomePage() {
    return this.route.snapshot.routeConfig?.path === 'home';
  }

  isRevisionPage() {
    return this.route.snapshot.routeConfig?.path === 'admin/revision';
  }

  get fixMenu() {
    return this.menuService.fixMenu$;
  }

  menuFixed() {
    this.menuService.toggleMenuFixed();
  }

}
