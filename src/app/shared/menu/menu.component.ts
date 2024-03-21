import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];
  isAdmin: boolean = true;
  activeSubmenu: string | null = null; // Rastrear submenu ativo

  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit(): void {}

  get fixMenu() {
    return this.menuService.fixMenu$;
  }

  changeFixMenu() {
    this.menuService.toggleMenuFixed(true); // Isso alternará o valor de fixMenu entre true e false
  }

  isRouteActive(route: string): boolean {
    return (
      this.removeLeadingSlash(this.router.url) ===
      this.removeLeadingSlash(route)
    );
  }

  isAnySubRouteActive(item: MenuItem): boolean {
    if (item.subMenuItems) {
      for (const subItem of item.subMenuItems) {
        if (this.isRouteActive(subItem.subRoute)) {
          this.activeSubmenu = item.name;
          return true;
        }
      }
    }
    return false;
  }

  removeLeadingSlash(route: string): string {
    return route?.replace(/^\//, ''); // Remove a barra inicial se existir
  }

  changePageMenu(page: any) {
    if (page && page.route === '') {
      // Encontre o primeiro item de submenu com uma subRoute e ative-o
      const firstSubmenuItemWithRoute = page.subMenuItems.find(
        (subItem: any) => subItem.subRoute
      );

      this.router.navigateByUrl(firstSubmenuItemWithRoute.subRoute);
    } else if (page && page.route === 'external') {
      // Se o item de menu for 'external', abra ou feche o submenu conforme necessário
      if (this.activeSubmenu === page.name) {
        this.activeSubmenu = null; // Fecha o submenu
      } else {
        this.activeSubmenu = page.name; // Abre o submenu
      }
    } else {
      // Para outros itens de menu principal, navegue para a rota principal e feche o submenu
      this.router.navigateByUrl(page.route);
    }
  }

 // Função para filtrar os itens de menu com base na propriedade 'isAdmin'
 filterMenuItemsByAdminStatus(items: MenuItem[], isAdmin: boolean): MenuItem[] {
  return items.filter(item => !item.isAdmin || (item.isAdmin && isAdmin));

}

  
  changePageSubmenu(page: any) {
    if (page.subRoute) {
      this.router.navigateByUrl(page.subRoute);
    }
  }
}

interface MenuItem {
  name: string;
  icon: string;
  route?: any;
  isAdmin: boolean;
  subMenuItems?: SubMenuItem[];
}
interface SubMenuItem {
  name: string;
  url?: string;
  icon?: string;
  route?: any;
  subRoute?: any;
}
