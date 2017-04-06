import { Component }    from '@angular/core';
import { Business }     from './business';

@Component({
    selector: 'business-detail',
    templateUrl: './business-detail.component.html'
})

export class BusinessDetailComponent{
    business: Business;
}
