import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Termynal } from '../../../scripts/termynal';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-terminal',
  imports: [CommonModule, RouterModule],
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // tslint:disable-next-line:no-unused-expression
      new Termynal('#termynal', { startDelay: 600 }, this.document);
    }
  }
}
