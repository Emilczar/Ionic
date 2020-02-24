import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data-service/data-service.service';
import { InfoMobile } from 'src/models/frontend/infoMobile';
import { Sections } from 'src/models/backend/sections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  info: InfoMobile ;
  sections: Sections[] = []
  private subscription: Subscription;
  constructor(private dataService: DataService, private router: Router) { 
    this.subscription =  this.dataService.getInfo().subscribe((info) => {
      this.info = info;
    }).add(this.dataService.getSections().subscribe((sections)=> {
this.sections = sections
    }))
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }

}
goToRoom(sortOrder: number) {
this.router.navigate(['/room', sortOrder])
}
}

