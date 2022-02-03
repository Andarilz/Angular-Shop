// import {NgModule} from "@angular/core";
// import {CommonModule} from "@angular/common";
// import {RouterModule} from "@angular/router";
//
//
// import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
// import { LoginPageComponent } from './login-page/login-page.component';
// import { AddPageComponent } from './add-page/add-page.component';
// import { EditPageComponent } from './edit-page/edit-page.component';
// import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
// import { OrdersComponent } from './orders/orders.component';
//
// @NgModule({
//     imports: [
//         CommonModule, // для директив, пайпов и прочего
//         RouterModule.forChild([
//             {
//                 path: '', component: AdminLayoutComponent, children: [
//                     {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
//                     {path: 'login', component: LoginPageComponent},
//                     {path: 'product/:id/edit', component: EditPageComponent},
//                     {path: 'dashboard', component: DashboardPageComponent},
//                     {path: 'orders', component: OrdersComponent}
//                 ]
//             }
//         ]), // для роутинга дочернего
//     ],
//     exports: [],
//     declarations: [
//         LoginPageComponent,
//         AddPageComponent,
//         EditPageComponent,
//         DashboardPageComponent,
//         OrdersComponent,
//         AdminLayoutComponent
//     ]
// })
//
// export class AdminModule {
//
// }


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminLayoutComponent} from "./shared/admin-layout/admin-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {EditPageComponent} from "./edit-page/edit-page.component";
import {OrdersComponent} from "./orders/orders.component";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {AddPageComponent} from "./add-page/add-page.component";

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
        ])
    ],
    exports: []
})

export class AdminModule {
}
