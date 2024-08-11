import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../service/user.service";

export const profileGuardGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  const user = service.getUser();
  return !!user;
};
