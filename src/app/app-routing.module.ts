import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { MessageComponent } from './pages/message/message.component';
import { MeComponent } from './pages/me/me.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/首页' },
  {
    path: '首页',
    component: WelcomeComponent
  },
  {
    path: '博客',
    component: BlogComponent
  },
  {
    path: '随笔',
    component: DiaryComponent
  },
  {
    path: '留言板',
    component: MessageComponent
  },
  {
    path: '关于我',
    component: MeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
