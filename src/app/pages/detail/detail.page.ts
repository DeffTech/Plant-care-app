import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: any;
  plant: Plant;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) { }

  ngOnInit() {
    // get item id from route params
    this.id = this.route.snapshot.params.id;
    this.getPlant();
  }

  getPlant() {
    this.plantService.getPlantById(this.id).subscribe((res: Plant) => {
      this.plant = res;
      console.log(this.plant);
    });
  }

}
