import { IonicModule } from '@ionic/angular'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HeaderComponent } from '../header/header.component'

const allComponents = [
  HeaderComponent
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: allComponents,
  exports: allComponents,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
