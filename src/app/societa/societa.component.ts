import { Component, OnInit } from '@angular/core';
import { Contact, Socio } from '../models/shared/model';
import { DataService } from '../services/data/data.service';
import { Data } from '@angular/router';
@Component({
  selector: 'app-societa',
  templateUrl: './societa.component.html',
  styleUrls: ['./societa.component.css']
})
export class SocietaComponent implements OnInit{
  socioList: Socio[] =[]
  contactList: Contact[] = []
constructor(private service: DataService){}

ngOnInit(): void {
  this.socioList = this.service.getSocio();
  console.log(this.socioList)
  this.contactList = this.service.getContact();
}
}
