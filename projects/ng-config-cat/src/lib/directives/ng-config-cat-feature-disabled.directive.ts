import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ConfigCatUser } from '../models';
import { NgConfigCatService } from '../services/ng-config-cat.service';

@Directive({
  selector: '[ngConfigCatFeatureDisabled]'
})
export class NgConfigCatFeatureDisabledDirective implements OnInit, OnDestroy {
  @Input('ngConfigCatFeatureDisabled') public featureName: string;
  @Input('ngConfigCatDefault') public defaultValue: any;
  @Input('ngConfigCatUser') public user: ConfigCatUser;

  private destroy$ = new Subject<void>();

  constructor(
    private ngConfigCatService: NgConfigCatService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private changeDetection: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    if (!this.featureName) {
      throw new Error('Attribute `ngConfigCatFeatureDisabled` should not be null or empty');
    }

    this.render();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  private render(): void {
    this.ngConfigCatService.getValue<boolean>(this.featureName, this.defaultValue, this.user).pipe(
      takeUntil(this.destroy$),
      map(Boolean),
    ).subscribe((isEnabled: boolean) => {
      if (isEnabled) {
        this.viewContainer.clear();
      } else {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }

      this.changeDetection.detectChanges();
    });
  }
}
