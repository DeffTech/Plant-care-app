import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1
  };

  plants: Plant[];

  constructor(
    private plantService: PlantService
  ) { }

  ngOnInit() {
    this.getPlants();
  }


  getPlants() {
    return this.plantService.getPlants().subscribe((res: Plant[]) => {
      this.plants = res;
      console.log(this.plants);
    });
  }

}
