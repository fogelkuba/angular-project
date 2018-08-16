import {Component} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService, private auth: AuthService) {
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response) => {
                    console.log(response);
                });
    }
    onFetchData() {
        this.dataStorageService.fetchRecipes()
    }
}
