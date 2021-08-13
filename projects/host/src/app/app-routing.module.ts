import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'projects/host/src/app/home/home.component';

function getComponent() {
  return import('mfe1/MfefeatureModule').then((m) => {
    return m.ProfileComponent;
  });
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mfe1',
    component: await getComponent()
  },
  {
    path: 'enquiryapp',
    loadChildren: () =>
      import('enquiryapp/EnquiryfeatureModule').then((m) => {
        return m.EnquiryfeatureModule;
      }),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
