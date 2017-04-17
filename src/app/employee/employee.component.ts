import { Component, OnInit }    from '@angular/core';
import { QueueEntry }           from './../terminal/queueentry';
import { TerminalService }      from './../terminal/terminal.service';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
})

export class EmployeeComponent implements OnInit {
    currentCustomer: QueueEntry;

    constructor(
        private terminalService: TerminalService) {}

    ngOnInit(): void {
        this.getEntry();
    }

    getEntry(): void {
        this.terminalService.getEntry(1).then(entry => this.currentCustomer = entry);
    }
}
