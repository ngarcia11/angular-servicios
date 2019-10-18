import { Component, OnInit } from "@angular/core";
import { Usuarios } from './usuarios';
import { UsersService } from './users.service';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  u: any[] = [];

  constructor(public uS : UsersService) {}

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
  ngOnInit() {
     this.uS.getUser.subscribe(
      data => {
        // Success
        this.u = data["results"];
      },
      error => {
        console.error(error);
      }
    );
  }
}
