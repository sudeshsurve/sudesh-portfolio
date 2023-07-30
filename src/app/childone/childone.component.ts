import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.scss']
})
export class ChildoneComponent implements OnInit {
@Input('jobarray') jobarray : any[]= []
@Output() onClicked = new EventEmitter()
contactForm : any
  constructor(private gs : GlobalService , private fb: FormBuilder) { }
  ngOnInit(): void {
     this.contactForm = this.fb.group({
        email : ['' , Validators.required],
        password:['' , Validators.required]
     })
  }   
  onSubmit(){
    if(this.contactForm.invalid){
    }else{
      this.onClicked.emit(this.contactForm.value)
    }
  }

}
  