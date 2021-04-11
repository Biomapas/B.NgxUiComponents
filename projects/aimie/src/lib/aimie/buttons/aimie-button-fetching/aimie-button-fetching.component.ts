import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aimie-button-fetching',
  template: `
    <button mat-mini-fab class="sync-fab" [ngClass]="{'spinner': fetching}">
      <mat-icon>{{materialIcon || 'sync'}}</mat-icon>
    </button>
  `,
  styleUrls: ['./aimie-button-fetching.component.scss']
})
export class AimieButtonFetchingComponent {
  @Input() public fetching: boolean;
  @Input() public materialIcon: string;
}
