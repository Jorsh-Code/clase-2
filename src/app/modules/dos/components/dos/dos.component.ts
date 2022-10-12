import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido/compartido.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  constructor(private compartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.update();
    console.log(this.compartidoService,'-----');
  }

  getDataForm(){
    let name : HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    let email : HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    name.value = this.compartidoService.name;
    email.value = this.compartidoService.email;
  }

  update(){
    document.getElementById('btn-update')?.addEventListener('click',()=>{
      this.getDataForm();
    });
  }
}
