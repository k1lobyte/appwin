import { Component } from '@angular/core';
import { BUSINESSES } from './mock-businesses';

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
