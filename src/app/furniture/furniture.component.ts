import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Furniture } from '../furniture';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { MainViewComponent } from '../main-view/main-view.component';


@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  public furniture: Furniture;
  id: number;

  constructor(
    private furnitureService: FurnitureService,
    private router: Router,
    private route: ActivatedRoute 
    ) {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      }

  ngOnInit() {
    this.getFurnitureById(this.id);
  }

  public getFurnitureById(furnitureId: number): void {
    this.furnitureService.getFurnitureById(furnitureId).subscribe(
      (response: Furniture) => {
        this.furniture = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

public onUpdateFurniture(furniture: Furniture): void{
    this.furnitureService.updateFurniture(furniture).subscribe(
      (response: Furniture) => {
        console.log(response);
        this.getFurnitureById(this.id);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

public onDeleteFurniture(furnitureId: number): void{
    this.furnitureService.deleteFurniture(furnitureId).subscribe(
      (response: void) => {
        console.log(response);
        this.router.navigateByUrl("/");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(furniture: Furniture, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'edit'){
    button.setAttribute('data-target','#updateFurnitureModal');
    }
    if(mode === 'delete'){
    button.setAttribute('data-target','#deleteFurnitureModal');
    }
    container.appendChild(button);
    button.click();
  }
}
