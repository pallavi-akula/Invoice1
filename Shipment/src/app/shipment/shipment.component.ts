        import { Component, OnInit } from '@angular/core';
import { Shipment } from '../models/shipment';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  shipments: Shipment[];

  constructor(private shipmentService: ShipmentService) { }

  ngOnInit() {
    this.getShipments();
  }

  getShipments(): void {
    this.shipmentService.getShipments().subscribe(
      shipments => {
      this.shipments = shipments;
      console.log('Shipments here!!');
      console.log(this.shipments);
      });
  }

  updateShipment(shipment:Shipment,status:string): void {
    this.shipmentService.updateShipment(shipment.shipmentId,status).subscribe(
      success => {
        if(success){
          shipment.deliveryStatus = status;
          shipment.changedDeliveryStatus = undefined;
        }
        console.log(success);
      });
  }


}
