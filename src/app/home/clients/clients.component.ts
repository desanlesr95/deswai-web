import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients:Client[] = []
  constructor(public clientsService:ClientsService) {


  }

  ngOnInit(): void {
    
    this.clientsService.getClients().subscribe(res => {
      this.clients = res.clients;
      this.clientsService.setClients(this.clients);
    })
  }

}
