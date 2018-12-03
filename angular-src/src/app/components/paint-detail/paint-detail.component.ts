import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-paint-detail',
  templateUrl: './paint-detail.component.html',
  styleUrls: ['./paint-detail.component.css']
})
export class PaintDetailComponent implements OnInit {

  paint = {};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getPaintDetails(this.route.snapshot.params['id']);
  }
  getPaintDetails(id) {
    this.api.getPaint(id)
      .subscribe(data => {
        console.log(data);
        this.paint = data;
      });
  }
  deletePaint(id) {
    this.api.deletePaint(id)
      .subscribe(res => {
          this.router.navigate(['/paints']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
