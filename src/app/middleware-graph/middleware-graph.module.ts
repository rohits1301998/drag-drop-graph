import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddlewareGraphComponent } from './middleware-graph.component';
import { NodeComponent } from './node/node.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EdgeDirective } from './edge.directive'




@NgModule({
  declarations: [MiddlewareGraphComponent, NodeComponent, EdgeDirective],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    MiddlewareGraphComponent, NodeComponent
  ]
})
export class MiddlewareGraphModule { }
