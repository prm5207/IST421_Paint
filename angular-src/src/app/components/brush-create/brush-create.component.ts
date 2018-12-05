import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-brush-create',
  templateUrl: './brush-create.component.html',
  styleUrls: ['./brush-create.component.css']
})
export class BrushCreateComponent implements OnInit {
  brushForm: FormGroup;
  PartNumber:string='';
  Brand:string='';
  Material:string='';
  Size:string='';
  Quantity:number;
  Price:number;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.brushForm = this.formBuilder.group({
      'PartNumber' : [null, Validators.required],
      'Brand' : [null, Validators.required],
      'Material' : [null, Validators.required],
      'Size' : [null, Validators.required],
      'Quantity' : [null, Validators.required],
      'Price' : [null, Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    this.api.postBrush(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/brush-detail', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
