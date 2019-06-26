import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabHome',
        children: [
          {
            path: '',
            loadChildren: '../tabHome/tabHome.module#TabHomePageModule'
          }
        ]
      },
      {
        path: 'tabMyStore',
        children: [
          {
            path: '',
            loadChildren: '../tabMyStore/tabMyStore.module#TabMyStorePageModule'
          }
        ]
      },
      {
        path: 'tabAccount',
        children: [
          {
            path: '',
            loadChildren: '../tabAccount/tabAccount.module#TabAccountPageModule'
          }
        ]
      },
      {
        path: 'tabShop',
        children: [
          {
            path: '',
            loadChildren: '../tabShop/tabShop.module#TabShopPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tabHome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabHome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
