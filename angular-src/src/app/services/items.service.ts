import { Injectable} from '@angular/core'

@Injectable()

export class CartService {
    private items =[]
    addItem(item){
    this.items.push(item)
    }
    getItems (){
        return this.items
    }
}