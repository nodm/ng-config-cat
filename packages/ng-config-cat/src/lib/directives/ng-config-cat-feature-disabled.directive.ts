import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { ConfigCatUser } from '../models';
import { NgConfigCatService } from '../services/ng-config-cat.service';
import { NgConfigCatFeatureBaseDirective } from './ng-config-cat-feature-base.directive';

@Directive({
  selector: '[ngConfigCatFeatureDisabled]'
})
export class NgConfigCatFeatureDisabledDirective<T = null> extends NgConfigCatFeatureBaseDirective<T> {
  @Input('ngConfigCatFeatureDisabled') public featureName: string;
  @Input('ngConfigCatDefault') public defaultValue?: boolean = false;
  @Input('ngConfigCatUser') public user?: ConfigCatUser;

  protected shouldFeatureBeEnabled = false;

  constructor(
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<T>,
    ngConfigCatService: NgConfigCatService,
  ) {
    super(viewContainerRef, templateRef, ngConfigCatService);
  }
}
