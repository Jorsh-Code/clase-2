import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido/compartido.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

 

  constructor(private compartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.fillForm();
  }

  
  public fillForm() {
    let boton = document.getElementById('btn-ok');
    boton?.addEventListener('click',()=>{
      this.compartidoService.name = 'JL';
      this.compartidoService.email = 'correo@gmail.com';
      console.log(this.compartidoService);
    });
    
  }
}
