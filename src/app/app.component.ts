import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})

export class AppComponent implements OnInit {
  title = 'Yoga Online';
  constructor(private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private metaService: Meta,
    private modalService: NgbModal,
) {
  }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {
        const rt = this.getChild(this.activatedRoute);
        rt.data.subscribe(data => { this.titleService.setTitle(data.title); });
        this.modalService.dismissAll();
      });

    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'og:url', content: 'https://dino.com.br/' },
      { name: 'og:type', content: 'article' },
      { name: 'og:title', content: 'Yoga ' },
      { name: 'og:description', content: 'Dino Divulgador de notícias' },
      // { name: 'og:image', content: 'src/assets/img/dino-main.png' }
    ]);
    // this.primengConfig.ripple = true;
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
