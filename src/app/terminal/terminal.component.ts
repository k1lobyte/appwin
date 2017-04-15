import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

import { QueueEntry }               from './queueentry';
import { TerminalService }          from './terminal.service';

@Component({
    selector: 'terminal',
    templateUrl: './terminal.component.html',

})

export class TerminalComponent implements OnInit {
    fullQueue: QueueEntry[];

    constructor(
        private router: Router,
        private terminalService: TerminalService) {}

    ngOnInit(): void {
        this.getQueue();
    }

    getQueue(): void {
        this.terminalService.getQueue().then(queue => this.fullQueue = queue);
    }

    toEntry(): void {
        this.router.navigate(['terminal/add-entry']);
    }
}
