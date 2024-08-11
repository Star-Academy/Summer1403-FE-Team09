import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interface/book';

export const profileGuardGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  let user!: User | undefined;
  service.subscribeUser().subscribe((u) => {
    user = u;
  });
  return !!user;
};
