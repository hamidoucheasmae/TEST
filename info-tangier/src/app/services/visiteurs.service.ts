import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class VisiteursService {

  constructor(private afs : AngularFirestore) { }

  addSubs(subData: any){
    this.afs.collection('visiteurs').add(subData).then(()=>{
      console.log('comment saved ...');
      
    })
  }

  checkSubs(subEmail: any){
    return this.afs.collection('visiteurs', ref => ref.where('email', '==', subEmail)).get()
  }

}
