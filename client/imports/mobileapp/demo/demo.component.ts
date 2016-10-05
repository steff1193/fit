import { Component } from '@angular/core';
import { DemoComponent as CommonDemoComponent } from '../../both/demo/demo.component';
import { DemoDataService } from "../../both/demo/demo-data.service";

import template from './demo.component.html';

@Component({
  selector: 'demo',
  template
})
export class DemoComponent extends CommonDemoComponent {
  constructor(demoDataService: DemoDataService) {
    super(demoDataService);
  }
}
