import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userName: string = '';
  password: string = '';

  constructor(
    private usersService: UsersService
  ) {}

  async logIn() {
    if (this.userName !== '' && this.password !== '') {
      const user = await this.usersService.logIn(this.userName, this.password);
      console.log(user)
    }
  }
}
