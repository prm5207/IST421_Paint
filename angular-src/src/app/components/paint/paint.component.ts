import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit {
  paints: any;
  displayedColumns = ['itemNumber', 'color', 'quantity','price'];
  dataSourcePaint = new PaintDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPaints()
      .subscribe(res =>{
        this.paints = res;
        console.log(res);
        this.paints = res;
      }, err => {
        console.log(err);
      });
  }

}
export class PaintDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getPaints();
  }

  disconnect() {

  }
}
