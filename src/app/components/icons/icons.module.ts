import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Sun,
  Moon,
  ArrowDown,
  Github,
  // Mail,
  Codepen,
  Linkedin,
  ExternalLink
} from 'angular-feather/icons';

const icons = {
  Sun,
  Moon,
  ArrowDown,
  Github,
  // Mail,
  Codepen,
  Linkedin,
  ExternalLink
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule {}
