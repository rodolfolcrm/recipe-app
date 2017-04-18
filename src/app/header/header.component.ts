import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output() navegateEvent = new EventEmitter<String>();

    onNavigate(pageName:String){
        this.navegateEvent.emit(pageName);
    }
}