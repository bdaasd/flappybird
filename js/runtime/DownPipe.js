import { Pipe } from "./Pipe.js";
import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

export class DownPipe extends Pipe{
    constructor(top){
        const img = Sprite.getImage('downPipe');
        super(img,top);
    }
    //上下水管的间距
    draw(){
        let gap = DataStore.getInstance().canvas.height/5;
        this.y = this.top+gap;
        super.draw();
        }
    }
