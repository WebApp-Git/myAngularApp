import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-home-page',
  templateUrl: './form-home-page.component.html',
  styleUrls: ['./form-home-page.component.css']
})
export class FormHomePageComponent implements OnInit{
savedData:any;
  ngOnInit(){
    this.fetchExistingData()
  }

  fetchExistingData(){
    let data = JSON.parse(localStorage.getItem('savedQue'));
    if(data?.queArr.length){
      this.savedData = data;
    }
  }

  constructor(private router: Router){

  }

  navigateTo(){
    this.router.navigate(["/create-form"])
  }

}
