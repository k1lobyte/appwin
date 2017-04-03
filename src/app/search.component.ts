import { Component } from '@angular/core';

import { Business } from './business';


const BUSINESSES: Business[] = [
    {
        id: 1,
        name: 'Please work',
        code: 'aldkfjaslkdfj',
        address: '1234 testing street',
    },
    {
        id: 2,
        name: 'other place',
        code: 'alsdkfjnrme',
        address: 'other address',
    },
    {
        id: 3,
        name: "Booby's hair place",
        code: "1231kl2jlkj",
        address: "1777 7th street"
    }
];

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styles: [`
        .panel {
            margin: 5px;
        }
    `]
})

export class SearchComponent {
    businesses = BUSINESSES;
}
