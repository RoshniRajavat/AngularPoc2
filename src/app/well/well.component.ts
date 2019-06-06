import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  name: String;
  type: String;
  sourceKey: Number;
  newWell: any;
 
  @Input() wellSelectedData;
  @Output() dataEvent = new EventEmitter<string>();

  constructor() {}

  onAddClick() {

    if (this.wellSelectedData) {
      this.dataEvent.emit(this.wellSelectedData);
    } else {
      this.newWell = { name: this.name, type: this.type, sourceKey: this.sourceKey };
      this.dataEvent.emit(this.newWell);
    }

    this.wellSelectedData = undefined;
    this.name = undefined;
    this.type = undefined;
    this.sourceKey = null;

  }

  ngOnInit() {}

}
