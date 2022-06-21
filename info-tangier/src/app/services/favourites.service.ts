import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favoriteList: any = [];
  postsList = new BehaviorSubject<any>([]);

  constructor() { }


  addToFav(post: any){
    // console.log('deja existe !!!',this.favoriteList);
    // console.log('deja existe !!!',this.postsList);
    this.favoriteList.push(post);
    this.postsList.next(this.favoriteList);
    localStorage.setItem('posts',JSON.stringify(this.postsList.value));
    /*this.favoriteList.map((a: any) => {
        if(car.ID === a.ID){
            console.log('deja existe !!!',this.favoriteList);
            console.log('deja existe !!!',this.postsList);
            return;
        }else{
            this.favoriteList.push(car);
            this.postsList.next(this.postsList);
            console.log('not existe !!!',this.favoriteList);
            console.log('not existe !!!',this.postsList);
        }
    });*/
}

removeFav(post: any){
  this.favoriteList.map((a: any, index: any) => {
      if(post.ID === a.ID){
          this.favoriteList.splice(index,1);
          // console.log(a.ID);
      }
  });
  console.log(this.favoriteList);
}


}
