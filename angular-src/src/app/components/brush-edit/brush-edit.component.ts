import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-brush-edit',
  templateUrl: './brush-edit.component.html',
  styleUrls: ['./brush-edit.component.css']
})
export class BrushEditComponent implements OnInit {
  brushForm: FormGroup;
  id:string = '';
  PartNumber: string = '';
  Brand: string = '';
  Material: string = '';
  Size: string = '';
  Quantity: number;
  Price: number;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
      this.getBrush(this.route.snapshot.params['id']);
      this.brushForm = this.formBuilder.group({
        'PartNumber' : [null, Validators.required],
        'Brand' : [null, Validators.required],
        'Material' : [null, Validators.required],
        'Size' : [null, Validators.required],
        'Quantity' : [null, Validators.required],
        'Price' : [null, Validators.required]
      });

    }

    getBrush(id) {
      this.api.getBrush(id).subscribe(data => {
        this.id = data._id;
        this.brushForm.setValue({
          PartNumber: data.PartNumber,
          Brand: data.Brand,
          Material: data.Material,
          Size: data.Size,
          Quantity: data.Quantity,
          Price: data.Price,
        });
      });
    }

    onFormSubmit(form: NgForm) {
      this.api.updateBrush(this.id, form)
        .subscribe(res => {
            let id = res['_id'];
            this.router.navigate(['/brush-detail', id]);
          }, (err) => {
            console.log(err);
          }
        );
    }

    paintDetails() {
      this.router.navigate(['/brush-detail', this.id]);
    }
  }
