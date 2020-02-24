import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from '../service/web-services/backend/backend.service';
import { map } from 'rxjs/operators';
import { SectionsRoom } from 'src/models/backend/sections';
@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  private subscription: Subscription;
  private id = parseInt(this.route.snapshot.paramMap.get('id'));
  room: SectionsRoom[] =[]
  constructor( private route: ActivatedRoute, private backend: BackendService) { 

    this.backend.getRooms().subscribe((sectionsRoom) => {
      this.room = []
    for (const item of sectionsRoom) {
        if(item.sectionID === this.id) {
          this.room.push(item)
        }
    }
      console.log(this.room)
    })
  }

  ngOnInit() {
  }

}
