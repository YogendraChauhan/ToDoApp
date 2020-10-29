import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent {
  @Input() size = 'small';
  @Input() position: string;
  @Input() loading: boolean;
  @Input()
  @HostBinding('style.background-color') public backdropColor = '#f3f4f5';
  private _loaderClasses = 'loader';
  private _loaderOverlayClasses = 'overlay';

  get loaderOverlayClasses() {
    return [
      this._loaderOverlayClasses,
      this.position && `overlay--${this.position}`
    ].filter(Boolean).join(' ');
  }

  set loaderOverlayClasses(classes: string) {
    this._loaderOverlayClasses = classes;
  }

  get loaderClasses() {
    return [
      this._loaderClasses,
      this.size && `loader--${this.size}`
    ].filter(Boolean).join(' ');
  }

  set loaderClasses(classes: string) {
    this._loaderClasses = classes;
  }

  constructor() { }
}
