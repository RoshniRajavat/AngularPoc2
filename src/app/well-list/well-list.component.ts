import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {

  wellSelected;
  wellList = [{
    name: "testRLSWell01",
    type: "rls",
    sourceKey: 100001
  }, {
    name: "testESPWell01",
    type: "esp",
    sourceKey: 100101
  }]
  
  newData;
  typesObject= {};

  constructor(private router: Router) { }

  receiveData($event) {
    this.newData = $event
    this.wellList.push(this.newData);
    console.log("new Data", this.newData);
    this.setStyle();

  }

  ngOnInit() {
    this.setStyle();
  }

  setStyle() {
    var type = this.wellList.map(obj => obj.type);

    for (var i = 0; i < type.length; i++) {
      this.typesObject[type[i]] = this.getRandomColor();
    }
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  openWell(data) {

    this.wellSelected = {
      name: data.name,
      type: data.type,
      sourceKey: data.sourceKey
    };
  }

}
