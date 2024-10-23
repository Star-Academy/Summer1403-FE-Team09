import { Component } from '@angular/core';
import { User } from '../../interface/interface';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user!: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.subscribeUser().subscribe((user) => {
      this.user = user;
    });
  }
}
