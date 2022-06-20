import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoryPagePage } from './pages/tabs/category-page/category-page.page';
import { DetailsPostPage } from './pages/tabs/details-post/details-post.page';

const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsPostPage,
  },
  {
    path: 'category/:category/:id',
    component: CategoryPagePage,
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
