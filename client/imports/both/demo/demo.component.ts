import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DemoDataService } from '../../both/demo/demo-data.service';
import { DemoDataObject } from '../../../../both/models/demo-data-object';

export class DemoComponent implements OnInit {
    greeting: string;
    data: Observable<DemoDataObject[]>;

    constructor(private demoDataService: DemoDataService) {
        this.greeting = 'Hello Demo Component!';
    }

    ngOnInit() {
        this.data = this.demoDataService.getData().zone();
    }
}
