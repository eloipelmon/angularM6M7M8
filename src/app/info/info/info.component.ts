import { Component } from '@angular/core';
import { ServicioBD } from 'src/app/servicios/servicioBd.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  users: any[] = [];
  selectedUser: any;

  constructor(private servicioFormulario: ServicioBD, private router: Router) { }

  ngOnInit(): void {
    this.servicioFormulario.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users);
      },
      error: (err) => { console.error(err) },
      complete: () => { console.log('funcionando') }
    });
  }
  deleteUser(userID: number) {
    this.servicioFormulario.deleteUser(userID).subscribe(user => {
      console.log("Usuario con id: " + userID + " eliminado.");
      window.location.reload();
    })
  }

  filterTable(): void {
    let td: HTMLElement | null, txtValue: string;
    let input: string = (document.getElementById("filtro") as HTMLInputElement).value;
    let filter: string = input.toUpperCase();
    let table: HTMLElement | null = document.getElementById("miTabla");
    let tr: HTMLCollectionOf<HTMLTableRowElement> = table?.getElementsByTagName("tr") as HTMLCollectionOf<HTMLTableRowElement>;
    for (let i: number = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}