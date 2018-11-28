import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roller',
  templateUrl: './roller.component.html',
  styleUrls: ['./roller.component.css']
})
export class RollerComponent implements OnInit {
  roller: any;
  displayedColumns = ['PartNumber', 'Brand', 'Material', 'Size', 'Quantity','Price'];
  dataSource = new RollerDataSource(this.api);  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getRollers()
      .subscribe(res => {
        console.log(res);
        this.roller = res;
      }, err => {
        console.log(err);
      });
  }

}
export class RollerDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getRollers();
  }

  disconnect() {

  }
}