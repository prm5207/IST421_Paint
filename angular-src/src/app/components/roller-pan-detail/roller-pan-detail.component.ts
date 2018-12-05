import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-roller-pan-detail',
  templateUrl: './roller-pan-detail.component.html',
  styleUrls: ['./roller-pan-detail.component.css']
})
export class RollerPanDetailComponent implements OnInit {
  rollerpan = {};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
      this.getRollerPanDetails(this.route.snapshot.params['id']);
    }
    getRollerPanDetails(id) {
      this.api.getRollerPan(id)
        .subscribe(data => {
          console.log(data);
          this.rollerpan = data;
        });
    }
    deleteRollerPan(id) {
      this.api.deleteRollerPan(id)
        .subscribe(res => {
            this.router.navigate(['/roller-pan']);
          }, (err) => {
            console.log(err);
          }
        );
    }
  }
