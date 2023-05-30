import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 ngOnInit(): void {
    console.log('Inicio del proyecto');
    
  } 
  constructor(
    private apiService: ApiService
  ){}

  

  getAllPosts(){
    this.apiService.getAllPelis().subscribe({
      next: (response) => {console.log(response)}
    });
  }


  //Practicando peticiones con Fetch
 /* getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

  }*/

}
