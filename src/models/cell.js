export default class Cell {

    constructor( x, y, state){
        this.x = x
        this.y = y
        this.state = state
        this.prevState = state
    }


    Draw( p5instance, resolution ){
        
        p5instance.fill( 255 * this.state )
        p5instance.stroke( (this.state - 1) * 255 )

        p5instance.rect(
            this.x * resolution, 
            this.y * resolution, 
            resolution, resolution)
    }

}