import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Furniture } from '../furniture';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public latestFurniture: Furniture[];
  public cheapestFurniture: Furniture[];

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.getLatestFurniture();
    this.getCheapestFurniture();
  }

  public getLatestFurniture(): void {
    this.furnitureService.getLatestFurniture().subscribe(
      (response: Furniture[]) => {
        this.latestFurniture = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public getCheapestFurniture(): void {
    this.furnitureService.getCheapestFurniture().subscribe(
      (response: Furniture[]) => {
        this.cheapestFurniture = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }


}
