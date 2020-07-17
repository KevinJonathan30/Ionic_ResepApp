import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalresepService } from '../globalresep.service';
import { Resep } from '../resep.modal';

@Component({
  selector: 'app-detresep',
  templateUrl: './detresep.page.html',
  styleUrls: ['./detresep.page.scss'],
})
export class DetresepPage implements OnInit {

  id : string;
  isiImg : string[];
  cariresep : Resep;
  constructor(public route : ActivatedRoute, public globalresep : GlobalresepService) { 
    this.isiImg = [...globalresep.isiImg];
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idresep')) {
        return;
      }
      this.id = paramMap.get('idresep');
      this.cariresep = this.globalresep.getResep(this.id);
    })
  }

}
