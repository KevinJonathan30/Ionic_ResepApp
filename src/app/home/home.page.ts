import { Component, OnInit } from '@angular/core';
import { Resep } from '../resep.modal';
import { GlobalresepService } from '../globalresep.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  allResep : Resep[];
  isiImg : string[];
  getResep : Resep;

  constructor(public globalResep : GlobalresepService, public router : Router, public alertController : AlertController) {
    
  }

  klikitem(id : string) {
    this.router.navigate(['/detresep', id]);
  }

  async presentAlertMultipleButtons(id : string) {
    const alert = await this.alertController.create({
      header : 'Konfirmasi Delete',
      message : 'Apakah Benar data '+this.getResep.namaresep+' Akan dihapus?',
      buttons : [
        {
          text : 'Batal'
        },
        {
          text : 'Hapus',
          handler : () => {
            this.globalResep.deleteData(id);
            this.allResep = this.globalResep.getallResep();
          }
        }
      ]
    });
    await alert.present();
  }

  delete(id : string) {
    this.getResep = this.globalResep.getResep(id);
    this.presentAlertMultipleButtons(id);
  }

  ionViewWillEnter() {
    this.allResep = this.globalResep.getallResep();
    this.isiImg = [...this.globalResep.isiImg];
  }

  cloudclick() {
    this.router.navigate(['/datafirebase']);
  }
  ngOnInit() {

  }
}
