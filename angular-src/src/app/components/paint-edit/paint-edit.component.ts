import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-paint-edit',
  templateUrl: './paint-edit.component.html',
  styleUrls: ['./paint-edit.component.css']
})

export class PaintEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
