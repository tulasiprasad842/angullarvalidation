import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Education{
value:string;
viewValue:string;
}

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  educations:Education[]=[
    {value: 'mca', viewValue: 'MCA'},
    {value: 'btech', viewValue: 'B.Tech'},
    {value: 'degree', viewValue: 'Degree'}
  ];

  hide = true;
  misMatch: boolean = false;
  myForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.myForm=this.fb.group({
      name:        [null, Validators.required],
      email:       [null, [Validators.required, Validators.email]],
      pass:        [null, Validators.required],
      confirmPass: [null, Validators.required],
      mobile:      [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      gender :     [null, Validators.required],
      education:   [null, Validators.required],
      dob:         [null, Validators.required],
    })
   }

   checkPassword(){
    let password = this.myForm.value.pass;
    let confirmPassword  = this.myForm.value.confirmPass;

    console.log(password + '<-->' + confirmPassword);
    return password === confirmPassword ? this.misMatch=false : this.misMatch = true;
  }

   Name : string;
   Email: string;
   Password : any;
   Mobile: number;
   gender: string;
   DOB: number;



   onsubmit(){
     console.log(this.myForm.value);
   }
  //  MCA : string;
  //   BTECH: string;
  //  DEGREE: string;
  //  getOptions(value){
  //    if(value == 'mca'){
  //      this.MCA = value;
  //    }
  //    if(value == 'btech'){
  //      this.BTECH = value;
  //    }
  //    if(value == 'degree'){
  //      this.DEGREE = value;
  //    }
  //   }

  //   onsubmit(){
  //     var formValue = this.myForm.value;
  //     this.Name  = formValue.name;
  //     this.Email = formValue.email;
  //     this.Password  = formValue.pass;
  //     this.Mobile=  formValue.mobile;
  //     // this.Address = formValue.address;
  //     this.gender  = formValue.gender;
  //     this.DOB      = formValue.dob;
  //     console.log(this.Name, this.Email, this.Password, this.Mobile, this.gender, this.DOB)

  //     if(this.MCA == 'mca'){
  //       console.log(this.MCA);
  //     }else if(this.BTECH == 'btech'){
  //       console.log(this.BTECH);
  //     }else if(this.DEGREE == 'degree'){
  //       console.log(this.DEGREE);
  //     }
  //   }

  ngOnInit() {
  }

}
