import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AimieButtonChipComponent} from './buttons/aimie-button-chip/aimie-button-chip.component';
import {AimieButtonRefreshComponent} from './buttons/aimie-button-refresh/aimie-button-refresh.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AimieButtonRefreshComponent, AimieButtonChipComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [AimieButtonRefreshComponent, AimieButtonChipComponent]
})
export class AimieComponentsModule {
}
