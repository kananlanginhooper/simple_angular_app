import { Component } from '@angular/core';
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  constructor(public globalService: GlobalService) { }
}
