import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  public serverId = 10;
  private serverStatus = 'offline';

  public getServerStatus() {
    return this.serverStatus;
  }
}
