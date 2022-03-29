import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My First Angular App';
  fname:string="Joshna";
  lname:string="Josh";
  url:string="http://www.google.com";
  imgurl:string="./assets/images/angular-js.png";
  h:number=100;
  w:number=150;
  message="You have clicked on this button";
  flag=false;
  we=700;
  ShowMe(){
      this.flag=!this.flag;
  }
  products=[
    {name:"Pencil",price:10.00,available:"10-03-2022",rating:4.5},
    {name:"Eraser",price:5.00,available:"11-03-2022",rating:4.4},
    {name:"Pen",price:20.00,available:"12-03-2022",rating:4.3},
    {name:"Scale",price:15.00,available:"13-03-2022",rating:4.2},
  ]
}
