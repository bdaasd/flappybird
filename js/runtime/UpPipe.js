import { Sprite } from "../base/Sprite.js";
import { Pipe } from "./Pipe.js";

export class UpPipe extends Pipe{
   constructor(top){
       const img = Sprite.getImage('upPipe');
       console.log(img);
       super(img,top);
   }
   draw(){
       this.y = this.top-this.height;
       super.draw();
   }
}