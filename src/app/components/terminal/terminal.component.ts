import { Component, OnInit } from '@angular/core';
import { Termynal } from '../../../scripts/termynal';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
    ngOnInit(): void {
        // tslint:disable-next-line:no-unused-expression
        new Termynal('#termynal', { startDelay: 600 });
    }
}
