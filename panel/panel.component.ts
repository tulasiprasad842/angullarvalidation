import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent  {

  expandForm:FormGroup;
  panelForm:FormGroup;
  completeForm:FormGroup;
  
constructor(private fb:FormBuilder){
  this.expandForm=this.fb.group({
    firstName:[null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    lastName:[null,  [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    Age:[null, Validators.required],
    Date_of_Birth:[null,Validators.required],
  });
  this.panelForm=this.fb.group({
    fatherName:[null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    motherName:[null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    streetName:[null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    city:    [null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    State:[null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
  });
  this.completeForm=this.fb.group({
    mobileNo:[null,[Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    emailId:[null,[Validators.required, Validators.email]],
    alternate_mobileNo:[null,[Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    alternate_emailId:[null, [Validators.required, Validators.email]]
  });
    
  
}

keyPress7(event: any) {
  const pattern = /[0-9]/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();
  }
}

keyPress8(event: any) {
  const pattern = /[0-9]/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();
  }
}

keyPress(event: any) {
      const pattern =/^[A-Za-z]+$/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          event.preventDefault();
    
      }
    } 
    keyPress1(event: any) {
      const pattern =/^[A-Za-z]+$/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          event.preventDefault();
    
      }
    } 
    keyPress2(event: any) {
      const pattern =/^[A-Za-z]+$/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          event.preventDefault();
    
      }
    } 
    keyPress3(event: any) {
      const pattern =/^[A-Za-z]+$/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          event.preventDefault();
    
      }
    } 
    keyPress4(event: any) {
      const pattern =/^[A-Za-z]+$/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          event.preventDefault();
    
      }
    } 
    keyPress5(event: any) {
      const pattern =/^[A-Za-z]+$/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          event.preventDefault();
    
      }
    } 
    keyPress6(event: any) {
      const pattern =/^[A-Za-z]+$/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          event.preventDefault();
    
      }
    } 

step=null;
 

setStep(index: number) {
 this.step = index;
}

nextStep() {
 this.step++;
}

prevStep() {
 this.step--;

}

}
