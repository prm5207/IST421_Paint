import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-brush-detail',
  templateUrl: './brush-detail.component.html',
  styleUrls: ['./brush-detail.component.css']
})
export class BrushDetailComponent implements OnInit {
  brush = {};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

ngOnInit() {
    this.getBrushDetails(this.route.snapshot.params['id']);
  }
  getBrushDetails(id) {
    this.api.getBrush(id)
      .subscribe(data => {
        console.log(data);
        this.brush = data;
      });
  }
  deleteBrush(id) {
    this.api.deleteBrush(id)
      .subscribe(res => {
          this.router.navigate(['/brush']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
