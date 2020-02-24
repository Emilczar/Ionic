import { Injectable } from '@angular/core';
import { Info } from 'src/models/backend/info';


@Injectable({
    providedIn: 'root'
})
export class AdapterService {

    constructor() { }

    setInfo(info: Info) {
        let infoMobile = new InfoMobile();
        infoMobile.mac = info.mac;
        infoMobile.serialNumber = info.serialNumber;
        infoMobile.version = info.softVersion;

    }
}
