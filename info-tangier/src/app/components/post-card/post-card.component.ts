import { Component,Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
// import Swiper core and required modules
import SwiperCore, { EffectFade, SwiperOptions } from 'swiper';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  posts: any = [];
  postArray !: any[];
  config: SwiperOptions;
  config1: SwiperOptions;
  constructor(private favouritesService :FavouritesService) { }

  @Input() postData !: any;

  ngOnInit(): void {
    
    
  }
  ngAfterContentChecked() {
    this.config = {
      slidesPerView: 2.1
    };
    this.config1 = {
      slidesPerView: 2
    };
  }

  
  favourite(check){
    this.favouritesService.addToFav(this.postData);
    this.postData.isFavorite = check;
}
disfavourite(check){
    this.postData.isFavorite = check;
}


}
