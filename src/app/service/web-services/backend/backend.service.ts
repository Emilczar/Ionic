import { Injectable } from '@angular/core';
import { WebServiceName } from '../web-service-enum';
import { Info } from '../../../../models/backend/info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sections, SectionsRomm } from 'src/models/backend/sections';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  getInfo(): Observable<Info> {
    let url = environment.baseUrl + WebServiceName.info
    return this.httpClient.get<Info>(url);
  }

  getSections(): Observable<Sections[]> {
    let url = environment.baseUrl + WebServiceName.sections
    return this.httpClient.get<Sections[]>(url)
 }
 
 getRooms(): Observable<SectionsRomm> {
  let url = environment.baseUrl + WebServiceName.sections
  return this.httpClient.get<SectionsRomm>(url)
}


}
