import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuarios';


@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  u: any[] = [];

  users: Usuarios[] = [
    {
      name: "Norlan",
      age: 21,
      address: "Danli"
    },
    {
      name: "Mario",
      age: 22,
      address: "Danli"
    },
    {
      name: "Arlen",
      age: 23,
      address: "Tegucigalpa"
    }
  ];
}
