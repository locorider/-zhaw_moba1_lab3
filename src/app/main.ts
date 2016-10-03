import {Component} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'mainComponent',
  template: require('./main.html')
})
export class MainComponent {

}
