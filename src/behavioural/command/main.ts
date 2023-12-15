import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('light bedroom');
const bathroomLight = new SmartHouseLight('light bathroom');

// Commad
const bedroomlightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomlightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);

// Control - Invoker
const smartHouseapp = new SmartHouseApp();
smartHouseapp.addCommand('btn-1', bedroomlightPowerCommand);
smartHouseapp.addCommand('btn-2', bathroomlightPowerCommand);
smartHouseapp.addCommand('btn-3', bedroomIntensityCommand);

smartHouseapp.executeCommand('btn-1');
smartHouseapp.undoCommand('btn-1');
console.log();
smartHouseapp.executeCommand('btn-2');
smartHouseapp.undoCommand('btn-2');

for (let i = 0; i < 5; i++) {
  smartHouseapp.executeCommand('btn-3');
}

for (let i = 0; i < 3; i++) {
  smartHouseapp.undoCommand('btn-3');
}
