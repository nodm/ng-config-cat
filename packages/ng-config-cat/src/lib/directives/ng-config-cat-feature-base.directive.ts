import {
  Directive, EmbeddedViewRef, OnDestroy, OnInit, TemplateRef, ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { ConfigCatUser } from '../models';
import { NgConfigCatService } from '../services/ng-config-cat.service';

@Directive({
  selector: '[ngConfigCatFeatureBase]'
})
export abstract class NgConfigCatFeatureBaseDirective<T = null> implements OnInit, OnDestroy {
  public abstract featureName: string;
  public abstract defaultValue?: boolean;
  public abstract user?: ConfigCatUser;

  protected abstract shouldFeatureBeEnabled: boolean;

  private destroy$ = new Subject<void>();
  private viewRef: EmbeddedViewRef<T> | null = null;

  protected constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<T>,
    private ngConfigCatService: NgConfigCatService,
  ) {
  }

  public ngOnInit(): void {
    if (!this.featureName) {
      throw new Error('Attribute `ngConfigCatFeatureEnabled` should not be null or empty');
    }

    this.render();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  protected render(): void {
    this.ngConfigCatService.getValue<boolean>(this.featureName, this.defaultValue, this.user).pipe(
      takeUntil(this.destroy$),
      map((isFeatureEnabled: boolean) => isFeatureEnabled === this.shouldFeatureBeEnabled),
    ).subscribe((isVisible: boolean) => {
      if (isVisible) {
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.viewRef.markForCheck();
      } else {
        this.viewContainerRef.clear();

        if (this.viewRef) {
          this.viewRef.destroy();
          this.viewRef = null;
        }
      }
    });
  }
}
