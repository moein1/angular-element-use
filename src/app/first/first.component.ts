import { Component, OnInit , ElementRef ,ViewChild} from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  
  constructor() { }
    ngOnInit(): void {
      const button = document.querySelector('app-button');
      button?.addEventListener('action', (event: any)=>{
        console.log(`action created , ${event.detail} ` )
      })
  }
  

}
