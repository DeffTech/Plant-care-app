import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(
    private http: HttpClient
  ) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${environment.baseUrl}/plants`);
  }

  getPlantById(id: any): Observable<Plant> {
    return this.http.get<Plant>(`${environment.baseUrl}/plants/${id}`);
  }
}
