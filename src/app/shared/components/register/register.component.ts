import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;
  validPasswords = false;
  private searchTimeout1!: number;
  private searchTimeout2!: number;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    // private aRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      secondSurname: new FormControl('',),
      role: new FormControl("EXPLORER", [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password_1: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password_2: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  register(form: FormGroup) {
    if (form.invalid) {
      this.toastr.error('Rellena el formulario por favor', 'Error!')
      return;
    }
    const user: User = {
      role: form.value.role,
      statusUser: 1,
      name: form.value.name,
      surname: form.value.surname,
      secondSurname: form.value.secondSurname,
      email: form.value.email,
      password: form.value.password_1,
      entryDate: new Date(),
      legalConditions: true,
      rememberPassword: true,
    }
    if (this.formGroup.valid && this.validPasswords)
      this.authService.register(user).subscribe({
          next: () => {
            this.authService.login(user.email, user.password).subscribe({
              next: () => {
                this.toastr.success('El registro se ha producido correctamente!', 'Registrado con éxito!')
                this.router.navigate(['/home'])
              }
            });
          },
          error: () => this.toastr.error('Error a la hora de registrarse', 'Error!')
        }
      );
  }

  get email() {
    return this.formGroup.get('email');
  }

  emailValidator() {
    clearTimeout(this.searchTimeout1);
    this.searchTimeout1 = window.setTimeout(() => {
      if (this.email!.hasError('email')) {
        this.toastr.error('El campo Email no tiene formato correspondiente', 'Error!')
      }
      if (this.email!.hasError('required')) {
        this.toastr.error('Se requiere un email', 'Error!')
      }
    }, 1000);
  }

  passwordComparer(form: FormGroup) {
    clearTimeout(this.searchTimeout1);
    this.searchTimeout1 = window.setTimeout(() => {

      if (form.value.password_1 === form.value.password_2) {
        this.toastr.success('Las contraseñas  correctas', 'Perfecto!')
        this.validPasswords = true;
      } else {
        this.toastr.error('Las contraseñas no coinciden', 'Error!')
        this.validPasswords = false;
      }
    }, 1000);
  }

  passwordValidator(formGroup: FormGroup) {
    clearTimeout(this.searchTimeout2);
    this.searchTimeout2 = window.setTimeout(() => {
      if (this.formGroup.get('password_1').hasError('minlength')) {
        this.toastr.error('La contraseña debe tener al menos 6 caracteres', 'Error!');
      }
    }, 1000);

  }
}
