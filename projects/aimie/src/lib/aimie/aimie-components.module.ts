// Angular specific:
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Components:
import {AimieButtonFetchingComponent} from './buttons/aimie-button-fetching/aimie-button-fetching.component';
// Material dependencies:
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AimieButtonFetchingComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [AimieButtonFetchingComponent]
})
export class AimieComponentsModule {
}
