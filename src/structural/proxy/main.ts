import { log } from 'console';
import { SystemUserProxy } from './system-user/system-user-proxy';

// client-code
async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('o', 'Brien');
  log('take a time');
  log(await user.getAddresses());

  log('repeat in cache');
  for (let i = 0; i < 5; i++) {
    log(await user.getAddresses());
  }
}

clientCode();
