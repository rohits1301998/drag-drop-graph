import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

export interface INodePosition {
  x: number;
  y: number;
}

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input()
  initialPosition: INodePosition = {
    x: 0,
    y: 0
  };

  @Input()
  nodeId: string = '';

  @ViewChild(TemplateRef)
  nodeTemplate: TemplateRef<any> | null;

  constructor() {
    this.nodeTemplate = null;
  }

  ngOnInit(): void {
  }

}
