import { Component, OnInit, OnDestroy } from '@angular/core';
import { IconService } from 'src/app/icon-service';
import { timer, Subject, Subscription } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, OnDestroy{
  public icon!:IconDefinition;
  public clicks = new Subject<void>();
  private unsubscribe = new Subject();
  private subscription: Subscription;

  constructor(public service: IconService) {
    this.subscription = this.clicks.pipe(
      concatMap(() => timer(3000)),
      takeUntil(this.unsubscribe)
    ).subscribe(() => 
    this.icon = this.service.iconArray[Math.floor(Math.random()*this.service.iconArray.length)]);
  }

  ngOnInit(): void {
    this.icon = this.service.iconArray[Math.floor(Math.random()*this.service.iconArray.length)];
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(undefined);
    this.unsubscribe.complete();
  }
}
