import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: '**', redirectTo: '/recipes'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: false})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
