import { Component, Injectable } from '@angular/core';
import { Response } from "@angular/http";

import { DataStorageService } from "app/shared/data-storage.service";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
@Injectable()
export class HeaderComponent{

    constructor(private dataStorageService: DataStorageService){}

    onSaveData(){
        this.dataStorageService.storeRecipes()
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onFetchData(){
        this.dataStorageService.fetchRecipies();
    }
}