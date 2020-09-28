import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { ConfigCatUser } from '../models';
import { NgConfigCatService } from '../services/ng-config-cat.service';
import { NgConfigCatFeatureBaseDirective } from './ng-config-cat-feature-base.directive';

@Directive({
  selector: '[ngConfigCatFeatureEnabled]'
})
export class NgConfigCatFeatureEnabledDirective<T = null> extends NgConfigCatFeatureBaseDirective<T> {
  @Input('ngConfigCatFeatureEnabled') public featureName: string;
  @Input('ngConfigCatDefault') public defaultValue?: boolean = false;
  @Input('ngConfigCatUser') public user?: ConfigCatUser;

  protected shouldFeatureBeEnabled = true;

  constructor(
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<T>,
    ngConfigCatService: NgConfigCatService,
  ) {
    super(viewContainerRef, templateRef, ngConfigCatService);
  }
}
