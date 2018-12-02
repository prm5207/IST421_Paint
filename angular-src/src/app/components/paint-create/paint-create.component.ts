import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-paint-create',
  templateUrl: './paint-create.component.html',
  styleUrls: ['./paint-create.component.css']
})
export class PaintCreateComponent implements OnInit {
  paintForm: FormGroup;
  itemNumber:number;
  color:string='';
  quantity:number;
  price:number;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.paintForm = this.formBuilder.group({
      'itemNumber' : [null, Validators.required],
      'color' : [null, Validators.required],
      'quantity' : [null, Validators.required],
      'price' : [null, Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    this.api.postPaint(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/paint-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
