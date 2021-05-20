import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Furniture } from '../furniture';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public furnitureList: Furniture[];

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
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
