import { Component } from '@angular/core';
import { ApiService } from './SERVICES/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaMetNet';


  consultas: any = {};

  constructor(private service: ApiService){

  }

  ngOninit(): void{
    this.service.getAllPelis().subscribe(consultas =>{
      this.consultas = consultas;
      console.log(this.consultas)
  })
  
}
}
