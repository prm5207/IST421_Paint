import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-roller-create',
  templateUrl: './roller-create.component.html',
  styleUrls: ['./roller-create.component.css']
})
export class RollerCreateComponent implements OnInit {
  rollerForm: FormGroup;
  PartNumber:string='';
  Brand:string='';
  Material:string='';
  Size:string='';
  Quantity:number;
  Price:number;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
      this.rollerForm = this.formBuilder.group({
        'PartNumber' : [null, Validators.required],
        'Brand' : [null, Validators.required],
        'Material' : [null, Validators.required],
        'Size' : [null, Validators.required],
        'Quantity' : [null, Validators.required],
        'Price' : [null, Validators.required]
      });
    }
    onFormSubmit(form:NgForm) {
      this.api.postRoller(form)
        .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/roller-detail', id]);
        }, (err) => {
          console.log(err);
        });
    }
  }
