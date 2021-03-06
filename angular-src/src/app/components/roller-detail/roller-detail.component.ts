import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-roller-detail',
  templateUrl: './roller-detail.component.html',
  styleUrls: ['./roller-detail.component.css']
})
export class RollerDetailComponent implements OnInit {

  roller = {};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
      this.getRollerDetails(this.route.snapshot.params['id']);
    }
    getRollerDetails(id) {
      this.api.getRoller(id)
        .subscribe(data => {
          console.log(data);
          this.roller = data;
        });
    }
    deleteRoller(id) {
      this.api.deleteRoller(id)
        .subscribe(res => {
            this.router.navigate(['/roller']);
          }, (err) => {
            console.log(err);
          }
        );
    }
  }
