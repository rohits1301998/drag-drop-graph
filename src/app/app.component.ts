import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'middleware-poc';
  nodes: any[] = [];

  addNode() {
    this.nodes.push({
      position: {
        x: 10 + 30 * this.nodes.length,
        y: 10 + 30 * this.nodes.length
      },
      id:  'node' + this.nodes.length,
      label: 'Node' + this.nodes.length
    })
  }
}
