import { CanActivateFn } from '@angular/router';

export const authenticatorGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
