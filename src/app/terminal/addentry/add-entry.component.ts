import { Component, OnInit}    from '@angular/core';
import { TerminalService }      from './../terminal.service';
import { ServicesService }      from './../../service/api.services.service';
import { Service }              from './../../service/service';
import { QueueEntry }           from './../queueentry';
import { Router }               from '@angular/router';

@Component({
    selector: 'add-entry',
    templateUrl: './add-entry.component.html',
})

export class AddEntryComponent implements OnInit {
    //letservices: Service[];

    constructor(
        private terminalService: TerminalService,
        private servicesServ: ServicesService,
        private router: Router,
    ) {}

    ngOnInit(){
        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // this.servicesServ.getServicesByBusinessId(currentUser.company_id[0]).
        // then(services => this.services = services);
        //then(services => this.services = services);

    }


    addEntry(fName: string, lName: string, phone: string, email: string): void {
        let q = new QueueEntry(10, fName + ' ' + lName, 'aaa', 'aaa', 0);
        this.terminalService.addEntry(q);
        this.router.navigate(['/terminal']);
    }
}
