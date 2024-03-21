import { Component, OnInit } from '@angular/core';
import { SubscriptionCancel } from '../shared/components/subscription-cancel';
import { TeacherService } from './services/teacher.service';
import { takeUntil } from 'rxjs/operators';
import { Teacher } from './models/teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent extends SubscriptionCancel implements OnInit {

  public teaches!: Array<Teacher>;

  constructor( private teacherService: TeacherService) { super(); }

  ngOnInit(): void {
    this.getAllSegmentation();
  }


  private getAllSegmentation() {
    this.teacherService.getAllSegmentation().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.teaches = res;
    },
      (erorr) => {
      });
  }
}
