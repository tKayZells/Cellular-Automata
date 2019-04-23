import p5 from "p5"
import Cell from "../models/cell";

const sketch = ( p5 ) => {

    p5.setup = () => {  
        let canvas = p5.createCanvas(600, 600)
        canvas.background(44, 44, 44)
    }

}

export default sketch
