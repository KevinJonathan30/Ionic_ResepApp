import { Injectable } from '@angular/core';
import { Resep } from './resep.modal';

@Injectable({
  providedIn: 'root'
})
export class GlobalresepService {
  isiImg = [
    'assets/images/1x1-food-3.jpg',
    'assets/images/1x1-food-1.jpg',
    'assets/images/1x1-food-2.jpg'
  ]
  allresep : Resep[] = [
    {
      idresep : 'a3',
      imgresep : '0',
      namaresep : 'kentang',
      deskripsi : 'enak',
      waktu : '20 menit'
    }
  ]

  constructor() { }

  getallResep() {
    return [...this.allresep];
  }

  saveResep(data : Resep) {
    this.allresep.push(data);
  }

  getResep(id : string) {
    return {...this.allresep.find(resep => {
      return resep.idresep === id;
    })
    };
  }

  deleteData(id : string) {
    this.allresep = this.allresep.filter(resep => {
      return resep.idresep != id;
    })
  }
}
