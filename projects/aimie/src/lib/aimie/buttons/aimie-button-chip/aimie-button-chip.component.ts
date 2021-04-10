import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aimie-button-chip',
  templateUrl: './aimie-button-chip.component.html',
  styleUrls: ['./aimie-button-chip.component.scss']
})
export class AimieButtonChipComponent {
  @Input() public content: string;
  @Input() public borderColour: string;

}
