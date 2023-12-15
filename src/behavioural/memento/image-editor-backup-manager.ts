import { ImageEditor } from './image-editor';
import { IMemento } from './memento';

export class ImageEditorBackupManager {
  private mementos: IMemento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`BKP: save the ImageEditor state`);

    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) return console.log('BKP: no mementos');

    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} was restored with successs.`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
