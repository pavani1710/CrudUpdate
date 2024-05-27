import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void{
    
  }
}
