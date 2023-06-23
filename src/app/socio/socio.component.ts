import { Component, OnInit, HostListener} from '@angular/core';
import { DataService } from '../services/data/data.service';
import { Socio } from '../models/shared/model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit{
socio: Socio | undefined

constructor(private route: ActivatedRoute, private service: DataService){}

  ngOnInit(): void {
  this.route.params.subscribe(params =>{
    const socioId = Number(params['id']);
    const socio = this.service.getSocioById(socioId);
    if (socio){
      this.socio = socio; 
      this.socio.description = socio.description; 
      console.log(socio)
    }
  })
}

}
