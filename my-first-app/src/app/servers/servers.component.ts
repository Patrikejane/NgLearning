import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isDisabled = false;
  serverCreatedStatus = 'No Server Created yet';
  serverCreated = false;
  serverName= 'kubunetis Server';
  servers = ['testServer','testServer2'];

  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
    },2000)
   }

  ngOnInit() {
  }

  onServerCreated(){

    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreatedStatus =  this.serverName;

  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
    console.log(this.serverName);

  }

}
