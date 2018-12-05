import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brush',
  templateUrl: './brush.component.html',
  styleUrls: ['./brush.component.css']
})
export class BrushComponent implements OnInit {
  brushes: any;
  displayedColumns = ['PartNumber', 'Brand', 'Material', 'Size', 'Quantity','Price'];
  dataSource = new BrushDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getBrushes()
      .subscribe(res =>{
        this.brushes = res;
        console.log(res);
        this.brushes = res;
      }, err => {
        console.log(err);
      });
  }

}
export class BrushDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getBrushes();
  }

  disconnect() {

  }
}
