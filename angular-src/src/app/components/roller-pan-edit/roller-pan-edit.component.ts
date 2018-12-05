import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-roller-pan-edit',
  templateUrl: './roller-pan-edit.component.html',
  styleUrls: ['./roller-pan-edit.component.css']
})
export class RollerPanEditComponent implements OnInit {
  rollerpanForm: FormGroup;
  id:string = '';
  PartNumber: string = '';
  Material: string = '';
  Size: string = '';
  Quantity: number;
  Price: number;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

 ngOnInit() {
       this.getRollerPan(this.route.snapshot.params['id']);
       this.rollerpanForm = this.formBuilder.group({
         'PartNumber' : [null, Validators.required],
         'Material' : [null, Validators.required],
         'Size' : [null, Validators.required],
         'Quantity' : [null, Validators.required],
         'Price' : [null, Validators.required]
       });

     }

     getRollerPan(id) {
       this.api.getRollerPan(id).subscribe(data => {
         this.id = data._id;
         this.rollerpanForm.setValue({
           PartNumber: data.PartNumber,
           Material: data.Material,
           Size: data.Size,
           Quantity: data.Quantity,
           Price: data.Price,
         });
       });
     }

     onFormSubmit(form: NgForm) {
       this.api.updateRollerPan(this.id, form)
         .subscribe(res => {
             let id = res['_id'];
             this.router.navigate(['/roller-pan-detail', id]);
           }, (err) => {
             console.log(err);
           }
         );
     }

     rollerPanDetails() {
       this.router.navigate(['/roller-pan-detail', this.id]);
     }
   }
