import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data-service/data-service.service';
import { InfoMobile } from 'src/models/frontend/infoMobile';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  info: InfoMobile ;

  private subscription: Subscription;
  constructor(private dataService: DataService) { 
    this.subscription =  this.dataService.getInfo().subscribe((info) => {
      this.info = info;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }

}

}

