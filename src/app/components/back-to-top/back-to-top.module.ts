import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from './back-to-top.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
    declarations: [
        BackToTopComponent
    ],
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        BackToTopComponent
    ]
})
export class BackToTopModule {}
