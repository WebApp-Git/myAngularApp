import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent{
  ansTypes:any = [
    {
      label: "Short Text",
      value: "input"
    },
    {
      label: "Long Text",
      value: "textArea"
    },
    {
      label: "Radio Button",
      value: "radio"
    }
  ]
createqueForm: FormGroup;

get questionArray() : FormArray {
  return this.createqueForm.get("queArr") as FormArray
}

constructor(private fb:FormBuilder, private router:Router) {
  this.createqueForm = this.fb.group({
    queArr: this.fb.array([]) ,
  });
}

  ngOnInit(){
    this.fetchExistingData()
  }

  fetchExistingData(){
    let data = JSON.parse(localStorage.getItem('savedQue'));
    if(data?.queArr.length){
      data?.queArr.forEach(ele=>{
        this.addQue()
      })
      this.questionArray.setValue(data?.queArr)
    }
  }
 
  newQue(): FormGroup {
    return this.fb.group({
      queName: new FormControl('',[Validators.required]),
      queType:new FormControl('',[Validators.required]),
      ans1 : new FormControl(''),
      ans2 : new FormControl(''),
    })
  }
 
  addQue() {
    this.questionArray.push(this.newQue());
  }
 
  removeQue(i:number) {
    this.questionArray.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.createqueForm.value);
    localStorage.setItem("savedQue",JSON.stringify(this.createqueForm.value));
    this.router.navigate(["/"])

  }

  detectAnsType(event, i:number){
    if(event.value == "radio"){
      this.questionArray.controls[i].get('ans1').addValidators([Validators.required])
      this.questionArray.controls[i].get('ans2').addValidators([Validators.required])
    }else{
      this.questionArray.controls[i].get('ans1').reset()
      this.questionArray.controls[i].get('ans2').reset()
    }
  }

  reset(){
    this.createqueForm.reset();
  }
 
}

