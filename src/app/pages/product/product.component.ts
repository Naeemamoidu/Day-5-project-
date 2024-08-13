import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
constructor(private api:ApiService){}
  product:any=""
    ngOnInit()
    {
      this.api.getproduct().subscribe((data:any)=>{this.product=data})
    }
  }
    
