import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
ngOnInit(){

}
downloadPdf(name: any){
  let link = document.createElement('a');
  link.setAttribute('type', 'hidden');
  link.href = `/assets/${name}.pdf`;
  link.download =`${name}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
}
