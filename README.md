Responsive Drag-Drop implementation using Angular cdk
======================================================

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Steps to run this project locally

1. `git clone git@github.com:harimiriyam/responsive-dragdrop.git`
2. `npm install`.
3.  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
4. Run `ng build` to build the project.

## About cdk directuves and properties in the drag-drop component

####cdkDropListGroup 
Connects all the cdkDropList's together. All of the cdkDropList elements that are placed inside a cdkDropListGroup will be connected to each other automatically.
####cdkDropList
Container to wrap a set of draggable items.
####cdkDropListData
Data binding attribute for a given cdkDropList container.
####cdkDropListDropped
Event emitter for an item drop in a container.
####cdkDropListEnterPredicate
Function that is used to determine whether an item is allowed to be moved into a drop container.
####cdkDrag
Draggable item within a container.


