import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface department{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit{
  selForm:FormGroup;
  selectedvalue:string;
  constructor(private fb:FormBuilder){}

  optionlist:any[]=[
    {value:'electronics', viewValue:'Electronics'},
    {value:'computers', viewValue:'Computers'},
    {value:'electrical', viewValue:'Electrical'},
    {value:'mechanical', viewValue:'Mechanical'},
    {value:'civil', viewValue:'Civil'}
  ]

  ngOnInit(){
    this.selForm=this.fb.group({
      department:[null, Validators.required]
    })
  }
  


}
