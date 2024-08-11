import {CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interface/book';

export const authenticatorGuardGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  const router = inject(Router);
  let user!: User | undefined;
  service.subscribeUser().subscribe((u) => {
    user = u;
  });

  if (user) {
    router.navigate([''])
    return false;
  }
  return true;
};
