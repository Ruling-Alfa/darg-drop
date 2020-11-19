import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit, CdkDragStart, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newItems: Array<any> = [
    'Item 0',
    'Item 1',
    'Item 2',
    'Item 3',
  ]

  activeItems: Array<any> = [
    'Item 4',
    'Try to move me',
  ]

  doneItems: Array<any> = [
    'Item 5',
    'Item 6',
    'Item 7',
  ]

  dropped(event: CdkDragDrop<string[]>) {
    if (event.item.data === 'Try to move me') {
      console.log("this isn't happening today");
      return;
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data, event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  entered(event: CdkDragEnter<string[]>) {
    console.log('Entered', event.item.data);
  }

  exited(event: CdkDragExit<string[]>) {
    console.log('Exited', event.item.data);
  }

  specialUseCase(drag?: CdkDrag, drop?: CdkDropList) {
    if (drop.data.length <= 2) {
      console.log("Can't drop you because there aren't enough items in 'Active'");
      return false;
    }

    const allowedItems = ['Item 5', 'Item 6', 'Item 7', 'Item 2'];
    if (allowedItems.indexOf(drag.data) === -1) {
      console.log("Can't drop you because only Item 2, 5, 6 and 7 are allowed here");
      return false;
    }

    return true;
  };

  getItemType(data: any): number {
    let retData: number = -1;
    switch (data) {
      case 'Item 0':
      case 'Item 1':
      case 'Item 2':
      case 'Item 3': retData = 1;
        break;

      case 'Item 4':
      case 'Try to move me': retData = 2;
        break;
    }
    return retData;
  }
}
