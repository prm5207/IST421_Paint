import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roller-pan',
  templateUrl: './roller-pan.component.html',
  styleUrls: ['./roller-pan.component.css']
})
export class RollerPanComponent implements OnInit {
  rollerpans: any;
  displayedColumns = ['PartNumber', 'Material', 'Size', 'Quantity', 'Price'];
  dataSource = new RollerPanDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
      this.api.getRollerPans()
        .subscribe(res =>{
          this.rollerpans = res;
          console.log(res);
          this.rollerpans = res;
        }, err => {
          console.log(err);
        });
    }

  }
  export class RollerPanDataSource extends DataSource<any> {
    constructor(private api: ApiService) {
      super()
    }

    connect() {
      return this.api.getRollerPans();
    }

    disconnect() {

    }
  }
