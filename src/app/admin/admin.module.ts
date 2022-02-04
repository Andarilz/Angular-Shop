import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {OrdersComponent} from './orders/orders.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {AddPageComponent} from './add-page/add-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
        EditPageComponent,
        OrdersComponent,
        DashboardPageComponent,
        AddPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    {path: 'login', component: LoginPageComponent},
                    {path: 'product/:id/edit', component: EditPageComponent},
                    {path: 'orders', component: OrdersComponent},
                    {path: 'dashboard', component: DashboardPageComponent},
                    {path: 'add', component: AddPageComponent}
                ]}
        ]),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: []
})

export class AdminModule {
}
