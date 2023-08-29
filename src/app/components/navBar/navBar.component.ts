import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  serviciosRedirect(){
    this.router.navigate(['/listar-torres'])
  }
  clientesRedirect(){
    this.router.navigate(['/listar-producto'])
  }
  ventasRedirect(){
    this.router.navigate(['/listar-servicio'])
  }
  salir(){
    this.router.navigate(['#'])

  }
}
