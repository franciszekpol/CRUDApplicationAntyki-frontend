import { Component, OnInit } from '@angular/core';
import { Furniture } from './furniture';
import { FurnitureService } from './furniture.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testingRest';
  public furnitureList: Furniture[];

  constructor(private furnitureService: FurnitureService){}

  ngOnInit() {
    this.getFurniture();
  }

  public getFurniture(): void {
    this.furnitureService.getFurniture().subscribe(
      (response: Furniture[]) => {
        this.furnitureList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }



}
