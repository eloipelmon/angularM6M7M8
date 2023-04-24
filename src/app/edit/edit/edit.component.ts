import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from "@angular/router"
import { ServicioBD } from 'src/app/servicios/servicioBd.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  users: any[] = [];
  selectedUser: any;

  idToEdit: FormControl = new FormControl('');

  nombre: FormControl = new FormControl('', Validators.required);
  apellido1: FormControl = new FormControl('', Validators.required);
  apellido2: FormControl = new FormControl('');

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  telefono: FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(9), Validators.required]);
  telefono2: FormControl = new FormControl('');
  dni: FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(9), Validators.required]);

  fNacimiento: FormControl = new FormControl('', Validators.required);
  adulto: FormControl = new FormControl('', [Validators.required]);

  MyNewFormEditUser: FormGroup = new FormGroup(
    {
      idToEdit:this.idToEdit,
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

  ngOnInit(): void {
    this.service.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users);
      },
      error: (err) => { console.error(err) },
      complete: () => { console.log('funcionando') }
    });
  }
  Clic(FormGroup: any) {
    
    let participante ={
      nombre: this.MyNewFormEditUser.value.nombre,
      apellido1: this.MyNewFormEditUser.value.apellido1,
      apellido2: this.MyNewFormEditUser.value.apellido2,
      email: this.MyNewFormEditUser.value.email,
      telefono: this.MyNewFormEditUser.value.telefono,
      telefono2: this.MyNewFormEditUser.value.telefono2,
      dni:this.MyNewFormEditUser.value.dni,
      fNacimiento: this.MyNewFormEditUser.value.fNacimiento
    }


    this.service.editUser(participante,this.MyNewFormEditUser.value.idToEdit).subscribe({
      error: (err) => { console.error(err) },
      complete: () => { this.router.navigate(['']) }
    });
    console.log(FormGroup);
    (this.MyNewFormEditUser as FormGroup).reset();
  }

  simpleAlert() {
    Swal.fire('¡Usuario editado correctamente!');
  }
}