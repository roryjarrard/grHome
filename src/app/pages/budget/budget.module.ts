import { SharedModule } from './../../components/shared/shared.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { BudgetPageRoutingModule } from './budget-routing.module'

import { BudgetPage } from './budget.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetPageRoutingModule,
    SharedModule
  ],
  declarations: [BudgetPage]
})
export class BudgetPageModule { }
