import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router:Router) {}
  title = 'charleston-park-hoa';

  ngOnInit(){
    this.router.navigate(['/home']);
  }
  onClickHome(){
    this.router.navigate(['/home']);
  }
  onClickProjects(){
    this.router.navigate(['/projects']);
  }
  onClickForms(){
    this.router.navigate(['/forms']);
  }
  onClickContacts(){
    this.router.navigate(['/contacts']);
  }
 
}
