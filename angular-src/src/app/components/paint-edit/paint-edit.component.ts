import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-paint-edit',
  templateUrl: './paint-edit.component.html',
  styleUrls: ['./paint-edit.component.css']
})

export class PaintEditComponent implements OnInit {
  paintForm: FormGroup;
  id:string = '';
  itemNumber: number;
  color: string = '';
  quantity: number;
  price: number;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getPaint(this.route.snapshot.params['id']);
    this.paintForm = this.formBuilder.group({
      'itemNumber': [null, Validators.required],
      'color': [null, Validators.required],
      'quantity': [null, Validators.required],
      'price': [null, Validators.required]
    });

  }

  getPaint(id) {
    this.api.getPaint(id).subscribe(data => {
      this.id = data._id;
      this.paintForm.setValue({
        itemNumber: data.itemNumber,
        color: data.color,
        quantity: data.quantity,
        price: data.price
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updatePaint(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/paint-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  paintDetails() {
    this.router.navigate(['/paint-details', this.id]);
  }
}
