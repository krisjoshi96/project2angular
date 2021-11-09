import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  buses!: Bus[];

  constructor(private busService:BusService) { }

  ngOnInit(): void {
    this.busService.getBusList().subscribe(data=>{this.buses=data})


  }

}
