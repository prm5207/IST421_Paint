import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-roller-edit',
  templateUrl: './roller-edit.component.html',
  styleUrls: ['./roller-edit.component.css']
})
export class RollerEditComponent implements OnInit {
  rollerForm: FormGroup;
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
        this.getRoller(this.route.snapshot.params['id']);
        this.rollerForm = this.formBuilder.group({
          'PartNumber' : [null, Validators.required],
          'Brand' : [null, Validators.required],
          'Material' : [null, Validators.required],
          'Size' : [null, Validators.required],
          'Quantity' : [null, Validators.required],
          'Price' : [null, Validators.required]
        });

      }

      getRoller(id) {
        this.api.getRoller(id).subscribe(data => {
          this.id = data._id;
          this.rollerForm.setValue({
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
        this.api.updateRoller(this.id, form)
          .subscribe(res => {
              let id = res['_id'];
              this.router.navigate(['/roller-detail', id]);
            }, (err) => {
              console.log(err);
            }
          );
      }

      rollerDetails() {
        this.router.navigate(['/roller-detail', this.id]);
      }
    }
