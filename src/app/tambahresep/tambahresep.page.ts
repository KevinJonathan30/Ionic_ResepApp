import { Component, OnInit } from '@angular/core';
import { GlobalresepService } from '../globalresep.service';
import { Resep } from '../resep.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambahresep',
  templateUrl: './tambahresep.page.html',
  styleUrls: ['./tambahresep.page.scss'],
})
export class TambahresepPage implements OnInit {

  nama : string;
  desk : string;
  waktu : string;
  resepbaru : Resep;
  allResep : Resep[];

  constructor(public globalResep : GlobalresepService, public router : Router) { 

  }

  ngOnInit() {
    this.allResep = this.globalResep.getallResep();
  }

  simpandata() {
    this.resepbaru = {
      idresep : "r" + (this.allResep.length+1),
      imgresep : Math.floor(Math.random() * 3).toString(),
      namaresep : this.nama,
      deskripsi : this.desk,
      waktu : this.waktu
    }
    this.globalResep.saveResep(this.resepbaru);
    this.router.navigate(['home']);
  }
}
