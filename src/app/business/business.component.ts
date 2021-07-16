import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }


  businessDisplay:any=[];
  ngOnInit(): void {

    this._services.business().subscribe((result) => {
this.businessDisplay=result.articles;
    })
  }

}
