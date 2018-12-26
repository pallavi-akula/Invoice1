import { Injectable } from '@angular/core';
import { Shipment } from '../models/shipment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private shipmentUrl='http://localhost:8089/capstore/api/v1/shipment/all';
  private shipmentUpdateUrl='http://localhost:8089/capstore/api/v1/updateShipmentDeliveryStatus';
  shipments:Shipment[];

  constructor(private http: HttpClient) { 
    
  }

  
  getShipments(): Observable<Shipment[]>{
  return this.http.get<Shipment[]>(this.shipmentUrl);  
 }


 updateShipment(shipmentId:number,status:string) :Observable<boolean>
 {
  return this.http.post<boolean>(
    this.shipmentUpdateUrl+'/'+shipmentId+'/'+status
    ,null,{});
 }

}
