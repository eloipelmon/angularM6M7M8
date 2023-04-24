import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from "@angular/router"
import { ServicioBD } from 'src/app/servicios/servicioBd.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  nombre: FormControl = new FormControl('', Validators.required);
  apellido1: FormControl = new FormControl('', Validators.required);
  apellido2: FormControl = new FormControl('');

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  telefono: FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(9), Validators.required]);
  telefono2: FormControl = new FormControl('');
  dni: FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(9), Validators.required]);

  fNacimiento: FormControl = new FormControl('', Validators.required);
  adulto: FormControl = new FormControl('', [Validators.required]);

  MyNewForm: FormGroup = new FormGroup(
    {
      nombre: this.nombre,
      apellido1: this.apellido1,
      apellido2: this.apellido2,

      email: this.email,
      telefono: this.telefono,
      telefono2: this.telefono2,
      dni: this.dni,

      fNacimiento: this.fNacimiento,
      adulto: this.adulto
    });


  eighteenYearsAgo: string;

  constructor(private service: ServicioBD, private router: Router) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    this.eighteenYearsAgo = date.toISOString();
  }

  ngOnInit(): void { }

  Clic(FormGroup: any) {
    let participante ={
      nombre: this.MyNewForm.value.nombre,
      apellido1: this.MyNewForm.value.apellido1,
      apellido2: this.MyNewForm.value.apellido2,
      email: this.MyNewForm.value.email,
      telefono: this.MyNewForm.value.telefono,
      telefono2: this.MyNewForm.value.telefono2,
      dni:this.MyNewForm.value.dni,
      fNacimiento: this.MyNewForm.value.fNacimiento
    }
    this.service.postUser(participante).subscribe({
      error: (err) => { console.error(err) },
      complete: () => { this.router.navigate(['']) }
    });
    console.log(FormGroup);
    (this.MyNewForm as FormGroup).reset();
  }

  simpleAlert() {
    Swal.fire('¡Te has inscrito correctamente!');
  }

}