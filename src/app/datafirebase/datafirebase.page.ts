import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resep } from '../resep.modal';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { GlobalresepService } from '../globalresep.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-datafirebase',
  templateUrl: './datafirebase.page.html',
  styleUrls: ['./datafirebase.page.scss'],
})
export class DatafirebasePage implements OnInit {

  private resepcloud : Observable<Resep[]>;
  private resepcol : AngularFirestoreCollection<Resep>;
  private resep : Resep;
  private allResep : Resep[];
  isiImg : string[];
  public size : number;

  constructor(
    public globalResep : GlobalresepService, public router : Router, public alertController : AlertController,
    private fireStore : AngularFirestore
  ) { 
    this.resepcol = this.fireStore.collection<Resep>('Resep');

    //this.resepcol.add(this.resep);
    //this.resepcol.doc(this.resep.idresep).set(this.resep);

    this.resepcloud = this.resepcol.snapshotChanges().pipe (
      map(actions => {
          return actions.map( a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          })
      })
    )
    this.resepcol.valueChanges().subscribe(result => { this.logCount(result.length) });
    //console.log(this.size);
  }

  klikitem(id : string) {
    this.router.navigate(['/det', id]);
  }

  logCount(n : number) {
    this.size = n;
  }

  /*async presentAlertAdd() {
    const alert = await this.alertController.create({
      header : 'Add Data',
      inputs: [
        {
          name: 'nama',
          type: 'text', 
          placeholder: 'Nama'
        },
        {
          name: 'deskripsi',
          type: 'text', 
          placeholder: 'Deskripsi'
        },
        {
          name: 'waktu',
          type: 'text', 
          placeholder: 'Waktu'
        }
      ],
      buttons : [
        {
          text : 'Batal'
        },
        {
          text : 'Add',
          handler : (alertData) => {
            this.resepcol.valueChanges().subscribe(values => this.size = values.length)
            this.resep = {
              idresep : 'a' + (this.size + 1),
              imgresep : Math.floor(Math.random() * 3).toString(),
              namaresep : alertData.nama,
              deskripsi : alertData.deskripsi,
              waktu : alertData.waktu
            }
            this.resepcol.doc(this.resep.idresep).set(this.resep);
          }
        }
      ]
    });
    await alert.present();
  }*/



  async presentAlertUpdate(id : string) {
    const alert = await this.alertController.create({
      header : 'Update Data',
      inputs: [
        {
          name: 'nama',
          type: 'text', 
          placeholder: 'Nama'
        },
        {
          name: 'deskripsi',
          type: 'text', 
          placeholder: 'Deskripsi'
        },
      ],
      buttons : [
        {
          text : 'Batal'
        },
        {
          text : 'Update',
          handler : (alertData) => {
            this.resepcol.doc(id).update({
              namaresep : alertData.nama,
              deskripsi : alertData.deskripsi
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertMultipleButtons(id : string) {
    const alert = await this.alertController.create({
      header : 'Konfirmasi Delete',
      message : 'Apakah Benar data akan dihapus?',
      buttons : [
        {
          text : 'Batal'
        },
        {
          text : 'Hapus',
          handler : () => {
            this.resepcol.doc(id).delete();
          }
        }
      ]
    });
    await alert.present();
  }

  addclick() {
    //this.presentAlertAdd();
    this.resepcol.valueChanges().subscribe(values => this.size = values.length);
    this.allResep = this.globalResep.getallResep();
    for(var i = 0; i < this.allResep.length; i++) {
      this.resep = {
        idresep : this.allResep[i].idresep,
        imgresep : this.allResep[i].imgresep,
        namaresep : this.allResep[i].namaresep,
        deskripsi : this.allResep[i].deskripsi,
        waktu : this.allResep[i].waktu
      }
      this.resepcol.doc(this.resep.idresep).set(this.resep);
    }
  }

  update(id : string) {
    this.presentAlertUpdate(id);
  }

  delete(id : string) {
    this.presentAlertMultipleButtons(id);
  }

  ionViewWillEnter() {
    this.isiImg = [...this.globalResep.isiImg];
  }

  ngOnInit() {
  }

}
