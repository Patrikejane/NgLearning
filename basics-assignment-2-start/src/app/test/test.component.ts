import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  username: String = ''

  constructor() { }

  ngOnInit() {

  }

  isDisabled(){
    return this.username.length == 0 ? true : false;
  }

  resetUsername(){
    this.username = '';
  }


}
