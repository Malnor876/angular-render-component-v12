import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
  Type,
  ComponentRef,
  EmbeddedViewRef,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreateDialogService {
  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}
  open(component: Type<any>, outletElement: Element) {
    const componentNew =
      this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = componentNew.create(this.injector);
    this.applicationRef.attachView(componentRef.hostView);
    console.log(123);
    console.log(outletElement);
    outletElement.appendChild(this._getComponentRootNode(componentRef));
  }
  private _getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }
}
