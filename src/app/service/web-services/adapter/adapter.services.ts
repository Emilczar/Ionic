import { Injectable } from '@angular/core';
import { Info } from 'src/models/backend/info';
import { DataService } from '../../data-service/data-service.service';
import { InfoMobile } from 'src/models/frontend/infoMobile';
import { Sections } from 'src/models/backend/sections';


@Injectable({
    providedIn: 'root'
})
export class AdapterService {

    constructor(private dataService: DataService) { }

    setInfo(info: Info) {
        let infoMobile = new InfoMobile();
        infoMobile.mac = info.mac;
        infoMobile.serialNumber = info.serialNumber;
        infoMobile.version = info.softVersion;
        this.dataService.setInfo(infoMobile)
    }

    setSection(sections: Sections[]) {
        this.dataService.setSections(sections)
    }
}
