import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/user.model";
import {Role} from "../../model/role.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup: FormGroup;
  private searchTimeout!: number;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
  ) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(formGroup: FormGroup) {
    if (formGroup.invalid) {
      this.toastrService.error('Rellena los cammpos por favor', 'Error!')
      return;
    }

    this.authService.login(formGroup.value.email, formGroup.value.password).subscribe({
      next: (user: User) => {
        this.toastrService.success('Bienvenido ' + this.authService.getName(), 'Hola!')
        if (user.role === Role.ADMIN)
          this.router.navigate(['/admin']);
        else
          this.router.navigate(['/']);
      },
      error: () => {
        this.toastrService.error('Datos incorrectos', 'Error!')
      }
    });
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  emailValidator() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = window.setTimeout(() => {
      if (this.email!.hasError('email')) {
        this.toastrService.error('El campo Email no tiene formato correspondiente', 'Error!')
      }
      if (this.email!.hasError('required')) {
        this.toastrService.error('Se requiere un email', 'Error!')
      }
    }, 1000);
  }
}
