import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AimieButtonFetchingComponent} from './buttons/aimie-button-fetching/aimie-button-fetching.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AimieButtonFetchingComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [AimieButtonFetchingComponent]
})
export class AimieComponentsModule {
}
