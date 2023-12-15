import { ISmartHouseCommand } from './command';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements ISmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`the instesity of ${this.light.name} is ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`the instesity of ${this.light.name} is ${intensity}`);
  }
}
