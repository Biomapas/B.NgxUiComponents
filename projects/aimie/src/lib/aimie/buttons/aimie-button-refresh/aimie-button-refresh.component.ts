import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aimie-button-refresh',
  template: `
    <button mat-mini-fab class="sync-fab" [ngClass]="{'rotate': fetching, 'spinner': fetching}">
      <mat-icon>sync</mat-icon>
    </button>
  `,
  styleUrls: ['./aimie-button-refresh.component.scss']
})
export class AimieButtonRefreshComponent {
  @Input() public fetching: boolean;

}
