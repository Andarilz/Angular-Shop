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
import {AuthGuard} from "../shared/auth.guard";
import {QuillModule} from "ngx-quill";
import {SearchPipe} from "../shared/search.pipe";

@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
        EditPageComponent,
        OrdersComponent,
        DashboardPageComponent,
        AddPageComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        QuillModule.forRoot(),
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    {path: 'login', component: LoginPageComponent},
                    {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
                    {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
                    {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
                    {path: 'add', component: AddPageComponent, canActivate: [AuthGuard]}
                ]
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: []
})

export class AdminModule {
}
