import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  capAmerica: any;

  ngOnInit(): void {
    this.obtenerHeroe();
  }
  obtenerHeroe(){
    this.homeService.heroe().subscribe(data => {
this.capAmerica = data;
console.log(this.capAmerica);
    } );
  }

}
