import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume + 10);
    console.log(
      `${this.device.getName()} tinha volume ${oldVolume} agora tem ${this.device.getVolume()}`,
    );
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume - 10);
    console.log(
      `${this.device.getVolume()} tinha volume ${oldVolume} agora tem ${this.device.getName()}`,
    );
  }
}
