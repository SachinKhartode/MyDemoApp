import { Component, OnInit } from '@angular/core';

import * as lib from 'number-to-words'


@Component({
  selector: 'app-test-example1',
  templateUrl: './test-example1.component.html',
  styleUrls: ['./test-example1.component.css']
})
export class TestExample1Component implements OnInit {
  numberinword :string=""
  constructor() { }
  ngOnInit() {
  }

  updatenumber(num:any){
if (num.value=='' || !parseFloat(num.value))
{
  this.numberinword = "";
}
  else {  this.numberinword = lib.toWords(num.value);}

  }

}
