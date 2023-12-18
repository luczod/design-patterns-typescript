interface IObservable {
  subscribe(...observer: IObserver[]): void;
  unsubscribe(observer: IObserver): void;
  notify(): void; // update
}

// CONCRETE OBSERVABLE -> WATCHED
interface IObserver {
  update(...args: unknown[]): void;
}

class InputObservable implements IObservable {
  private observers: IObserver[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: IObserver[]): void {
    observers.forEach((item) => {
      if (!this.observers.includes(item)) {
        this.observers.push(item);
      }
    });
  }

  unsubscribe(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex > -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// CONCRETE OBSERVER -> WATCHMAN
class ParagraphObserver implements IObserver {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: IObservable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

// CONCRETE OBSERVER -> WATCHMAN
class DivObserver implements IObserver {
  constructor(public element: HTMLDivElement) {}

  update(observable: IObservable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

// CLIENT CODE
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');

  document.body.appendChild(input);

  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Initial text (Hardcoded)';
  return p;
}

function makeDiv(): HTMLDivElement {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.innerText = 'Text in DIV';
  return div;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const div1 = new DivObserver(makeDiv());

input.subscribe(p1, p2, div1);

input.element.addEventListener('keyup', function () {
  input.notify();
});

input.unsubscribe(p2);
