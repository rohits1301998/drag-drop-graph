import { Component, OnInit, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { timer } from 'rxjs';
import { NodeComponent } from './node/node.component';

declare const $: any;

interface IArgGraph {
  export: () => any;
  exportJson: () => any;
  refresh: () => any;
}

interface IArgNodes {
  id: string;
  text?: string;
  position: {
      left: string;
      top: string;
  },
  neighbors: string[] | string;
}

@Component({
  selector: 'app-middleware-graph',
  templateUrl: './middleware-graph.component.html',
  styleUrls: ['./middleware-graph.component.scss']
})
export class MiddlewareGraphComponent implements OnInit, AfterViewInit {

  @ContentChildren(NodeComponent)
  nodes: QueryList<NodeComponent> = new QueryList();

  argGraph!: IArgGraph;

  activeNodes: IArgNodes[] = [];

  constructor() {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.nodes.length > 0) {
      this.initArgGraph();
    }
    this.nodes.changes.subscribe(() => {
      this.initArgGraph();
    });
  }

  isConnected(nodeId: string): boolean {
    const node = this.activeNodes.find(n => n.id === nodeId);
    if (node) {
      return node.neighbors instanceof Array && node.neighbors.length > 0;
    }
    return false;
  }

  _nodesTrackBy(index: number, node: NodeComponent): string {
    return node.nodeId;
  }

  updateGraph() {
    this.activeNodes = JSON.parse(this.argGraph.exportJson());
    console.log(this.activeNodes);
  }

  initArgGraph() {
    timer(100).subscribe(() => {
      this.argGraph = $('.arg-Graph').ArgGraph({
        onGraphChange: () => {
            this.updateGraph();
        }
      });
      this.updateGraph();
    })
  }


}
