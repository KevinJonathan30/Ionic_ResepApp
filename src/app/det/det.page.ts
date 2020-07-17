import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GlobalresepService } from '../globalresep.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take,map } from 'rxjs/operators';
import { Resep } from '../resep.modal';

@Component({
  selector: 'app-det',
  templateUrl: './det.page.html',
  styleUrls: ['./det.page.scss'],
})
export class DetPage implements OnInit {

  private resepCol : AngularFirestoreCollection<Resep>;
  isiImg : string[];
  id : string;
  cariresep2 : Observable<Resep>;

  constructor(
    private fireStore : AngularFirestore,
    public globalResep : GlobalresepService,
    public route : ActivatedRoute
  ) { 
    this.isiImg = [...globalResep.isiImg];
    this.resepCol = this.fireStore.collection<Resep>('Resep');
  }

  getResep() : AngularFirestoreDocument<Resep> {
    return this.fireStore.collection('Resep').doc(this.id);
  }
  
  /*ionViewWillEnter() {
    this.globalResep.getResep(this.id).subscribe(isiresep => {
      this.cariresep2 = this.getResep().valueChanges();
    });
  }*/

  ionViewWillEnter() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idresep')) {
        return;
      }
      this.id = paramMap.get('idresep');
      this.cariresep2 = this.getResep().valueChanges();
    })
  }

  ngOnInit() {
  }

}
