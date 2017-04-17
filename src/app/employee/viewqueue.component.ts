import { Component, OnInit }        from '@angular/core';

import { QueueEntry }               from './../terminal/queueentry';
import { TerminalService }          from './../terminal/terminal.service';

@Component({
    selector: 'view-appointments',
    templateUrl: './viewqueue.component.html',
    styleUrls: ['./viewqueue.component.css'],
})

export class ViewQueueComponent implements OnInit {
    fullQueue: QueueEntry[];

    constructor(
        private terminalService: TerminalService) {}

    ngOnInit(): void {
        this.getQueue();
    }

    getQueue(): void {
        this.terminalService.getQueue().then(queue => this.fullQueue = queue);
    }
}
