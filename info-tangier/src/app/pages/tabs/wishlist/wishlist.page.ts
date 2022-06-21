import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavouritesService } from 'src/app/services/favourites.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  categories: any[] = [];
  trips: any[] = [];
  postArray !: any[];
  favoritePosts: any;

  constructor(
      private router: Router,
      private afavService: FavouritesService
      ,private postService : PostService
  ) { 
    this.initPost();
    
  }

  ngOnInit() {
      if(!localStorage.getItem('user')){
          this.router.navigate(['/login']);
      }else{

          console.log(this.favoritePosts)
      }
  }

  initPost(){
      const data = JSON.parse(localStorage.getItem('posts'));
      this.favoritePosts = data;
  }

  diFav(item: any){
      this.afavService.removeFav(item);
      this.initPost();
  }
}
