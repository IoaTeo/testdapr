import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommunicationProtocolEnum, DaprServer, DaprClient } from '@dapr/dapr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  daprClient: DaprClient;
  daprServer1: DaprServer | undefined;
  daprServer2: DaprServer | undefined;

  daprHost = "127.0.0.1"; // Dapr Sidecar Host
  daprPort = "3500"; // Dapr Sidecar Port of this Example Server
  serverHost = "127.0.0.1"; // App Host of this Example Server
  serverPort = "50051"; // App Port of this Example Server

  constructor(private http: HttpClient) { //, private daprClient: DaprClient
    // HTTP Example
    //this.daprServer1 = new DaprServer(this.serverHost, this.serverPort, this.daprHost, this.daprPort);

    // GRPC Example
    //this.daprServer2 = new DaprServer(this.serverHost, this.serverPort, this.daprHost, this.daprPort, CommunicationProtocolEnum.GRPC);
    this.daprClient = new DaprClient(this.daprHost, this.daprPort, CommunicationProtocolEnum.HTTP);
  }
}
