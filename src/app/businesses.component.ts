import { Component }    from '@angular/core';

import { Business }     from './business';


const BUSI: Business = {
    id: 1;
    name: 'Please work';
    code: 'aldkfjaslkdfj';
    address: '1234 testing street';
}

@Component({
    selector: 'businesses',
    templateUrl: './businesses.component.html'
})

export class Businesses {
    businesses: BUSI;
}
