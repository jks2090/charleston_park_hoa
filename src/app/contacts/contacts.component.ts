import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  name = 'test';
    links : any[]= ["link1.com", "link2.com", "link3.com"];
  
    mailText:string = "";
  
    
    ngOnInit(){
      this.mailText = "mailto:abc@abc.com+?subject=files&body=";
    }
  
    mailMe(email: any){
      this.mailText = `mailto:${email}?subject=files&body=`;
      window.location.href = this.mailText;
    }
}


// import { Component,OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//      <a [href]="mailText">Mail me the links</a> <br>
//      <span (click)="mailMe()">Mail me the links on (click)</span>
//   `
// })
// export class AppComponent implements OnInit {
//   name = 'test';
//   links : any[]= ["link1.com", "link2.com", "link3.com"];

//   mailText:string = "";

  
//   ngOnInit(){
//     this.mailText = "mailto:abc@abc.com+?subject=files&body="+this.links.join(" ,");
//   }

//   mailMe(){
//     this.mailText = "mailto:abc@abc.com?subject=files&body="+this.links.join(" ,");
//     window.location.href = this.mailText;
//   }


// }
