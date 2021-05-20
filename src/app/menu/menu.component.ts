import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Furniture } from '../furniture';
import { FurnitureService } from '../furniture.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public furniture: Furniture;
  selectedFile = null;
  image = null;

  constructor(
    private furnitureService: FurnitureService,
    private router: Router
    ) { }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  ngOnInit(): void {
  }

  public addFurniture(furniture: Furniture): void {
    document.getElementById('add-furniture-form').click();
        console.log(furniture);
    this.furnitureService.addFurniture(furniture).subscribe(
      (response: Furniture) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );  
  }

  public onOpenModal(furniture: Furniture): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#addFurnitureModal');
   
    container.appendChild(button);
    button.click();
  }


}
