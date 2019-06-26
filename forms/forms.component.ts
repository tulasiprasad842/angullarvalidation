import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
    selectForm: FormGroup;
    

  name=/^[A-Za-z]+$/;
  // courselist:string[]=['Angular', 'Java','Oracle', 'Html', 'C++', 'Devops'];
courselist:any[]=[
  {value:'course-1', viewValue:'Angular'},
  {value:'course-2', viewValue:'Java'},
  {value:'course-3', viewValue:'Oracle'},
  {value:'course-4', viewValue:'Html'},
  {value:'course-5', viewValue:'C++'},
  {value:'course-6', viewValue:'Devops'},

];
  userlist:any[]=[
    {value:'user-1', viewValue:'user1'},
    {value:'user-2', viewValue:'user2'},
    {value:'user-3', viewValue:'user3'},
    {value:'user-4', viewValue:'user4'}
  ];
  constructor(private fb:FormBuilder) { 
    this.selectForm=this.fb.group({
      Name:[null,  [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      Subjects:[null,  Validators.required],
      userName:[null, Validators.required],
      password:[null, Validators.required],
      Options:[null,  Validators.required]
    })
  }

  keyPress1(event: any) {
    const pattern =/^[A-Za-z]+$/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
  
    }
  } 

  onSubmit(){
    console.log(this.selectForm.value);
    }
}
