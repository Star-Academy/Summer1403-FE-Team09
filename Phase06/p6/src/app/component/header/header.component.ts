import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import { User } from '../../interface/book';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  user!: User | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.subscribeUser().subscribe((user) => {
      this.user = user;
    });
  }

  handleLogout(): void {
    this.userService.logOut();
    this.router.navigate(['']);
  }
}
