import { Component, OnInit } from '@angular/core';
import {DataService, FileFlatNode, FileNode } from '../data.service';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import {Observable, of as observableOf}from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent   {


  // transformer = (node: FileNode, level: number) => {
  //   return new FileFlatNode(!!node.children, node.filename, level);
  // }

  flatNodeMap = new Map<FileFlatNode, FileNode>();

  nestedNodeMap = new Map<FileNode, FileFlatNode>();

  selectedParent: FileNode | null = null;

  newItemName = '';

    treeControl: FlatTreeControl<FileFlatNode>;
    treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
    dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  checklistSelection = new SelectionModel<FileFlatNode>(true);
  // transformer: (node: FileNode, level: number) => FileFlatNode;
  // getlevel: (dataNode: FileFlatNode) => number;
  // descendantsAllSelected: any;

  constructor(private dataservice: DataService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    dataservice.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }
  transformers = (node: FileNode, level: number) => {
    return new FileFlatNode();
  }



  getLevel = (node: FileFlatNode) => node.level;

  isExpandable = (node: FileFlatNode) => node.expandable;

  // private getChildren = (node: FileNode): Observable<FileFlatNode[]> => observableOf(node.children);


  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: FileFlatNode) => _nodeData.item === '';

  transformer = (node: FileNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
        ? existingNode :  new FileFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  descendantsAllSelected(node: FileFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }
  /** Whether part of the descendants are selected */

descendantsPartiallySelected(node: FileFlatNode): boolean {
  const descendants = this.treeControl.getDescendants(node);
  const result = descendants.some(child => this.checklistSelection.isSelected(child));
  return result && !this.descendantsAllSelected(node);
}
  /** Toggle the to-do item selection. Select/deselect all the descendants node */

  ItemSelectionToggle(node: FileFlatNode): void {
  this.checklistSelection.toggle(node);
  const descendants = this.treeControl.getDescendants(node);
  this.checklistSelection.isSelected(node)
    ? this.checklistSelection.select(...descendants)
    : this.checklistSelection.deselect(...descendants);
}
  /** Select the category so we can insert the new item. */
  addNewItem(node: FileFlatNode) {
  const parentNode = this.flatNodeMap.get(node);
  this.dataservice.insertItem(parentNode!, '');
  this.treeControl.expand(node);
}
  /** Save the node to database */

saveNode(node: FileFlatNode, itemValue: string) {
  const nestedNode = this.flatNodeMap.get(node);
  this.dataservice.updateItem(nestedNode!, itemValue);
}


}
