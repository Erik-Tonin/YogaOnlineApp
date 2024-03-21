import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private fixMenuSubject = new BehaviorSubject<boolean>(true);
  fixMenu$ = this.fixMenuSubject.asObservable();

  toggleMenuFixed(value?: boolean) {
    if (value !== undefined) {
      this.fixMenuSubject.next(value);
    } else {
      // Se nenhum valor for fornecido, alternar entre true e false
      this.fixMenuSubject.next(!this.fixMenuSubject.value);
    }
  }
}
