import {Component} from '@angular/core';
import { Student } from './student'

@Component({
    selector:'app-root',
    templateUrl:'./app.component.html'
})
export class AppComponent{
    s1 = new Student();
    save(){
        console.log(JSON.stringify(this.s1));
        
    }


   
}