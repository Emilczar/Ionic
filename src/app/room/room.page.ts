import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from '../service/web-services/backend/backend.service';
import { SectionsRoom } from 'src/models/backend/sections';
import { ModalController } from '@ionic/angular';
import { DevicesComponent } from '../components/devices/devices.component';
@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  private subscription: Subscription;
  private id = parseInt(this.route.snapshot.paramMap.get('id'));
  room: SectionsRoom[] =[]
  constructor( private route: ActivatedRoute, private backend: BackendService, public modalController: ModalController) { 

   this.subscription = this.backend.getRooms().subscribe((sectionsRoom) => {
      this.room = []
    for (const item of sectionsRoom) {
        if(item.sectionID === this.id) {
          this.room.push(item)
        }
    }
    })
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  if(this.subscription) {
    this.subscription.unsubscribe();
  }
  }

  async open() {
    const modal = await this.modalController.create({
      component: DevicesComponent,
      componentProps: {
        id: this.id
      }
    });
    return await modal.present();
  }

}
