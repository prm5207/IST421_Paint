
import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brush-create',
  templateUrl: './brush-create.component.html',
  styleUrls: ['./brush-create.component.css']
})

export class BrushCreateComponent implements OnInit {
  PartNumber: String;
  Material: String;
  Quantity: Number;
  Price: Number;
  Size: String

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private api: ApiService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onBrushCreate(){
    const brush = {
      PartNumber: this.PartNumber,
      Material: this.Material,
      Quantity: this.Quantity,
      Price: this.Price,
      Size: this.Size
    }

    //Required Fields
    if(!this.validateService.validateBrush(brush)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false
    }


    //Register user
    this.api.postBrush(brush).subscribe(data=>{
      if(data.success){
        this.flashMessage.show('Brush created successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/brush'])
      }else{
        this.flashMessage.show('Something Went Wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/brush'])
      }
    });
  }

}
