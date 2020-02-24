import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/service/web-services/backend/backend.service';
import { Devices } from 'src/models/backend/devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  id: number;
  devices: Devices[] = []
  constructor(private navParams: NavParams, private modalCtrl: ModalController, private backend : BackendService) { 
    this.id = this.navParams.get('id');
    this.backend.getDevices().subscribe((devices) => {
      this.devices = devices;
    })
  }

  ngOnInit() {}
  close() {
    this.modalCtrl.dismiss();
  }
}
