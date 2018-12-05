import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-roller-pan-create',
  templateUrl: './roller-pan-create.component.html',
  styleUrls: ['./roller-pan-create.component.css']
})
export class RollerPanCreateComponent implements OnInit {
  rollerpanForm: FormGroup;
  PartNumber:string='';
  Material:string='';
  Size:string='';
  Quantity:number;
  Price:number;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
      this.rollerpanForm = this.formBuilder.group({
        'PartNumber' : [null, Validators.required],
        'Material' : [null, Validators.required],
        'Size' : [null, Validators.required],
        'Quantity' : [null, Validators.required],
        'Price' : [null, Validators.required]
      });
    }
    onFormSubmit(form:NgForm) {
      this.api.postRollerPan(form)
        .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/roller-pan-detail', id]);
        }, (err) => {
          console.log(err);
        });
    }
  }
