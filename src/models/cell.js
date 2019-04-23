export default class Cell {

    constructor( x, y, state, width){
        this.x = x
        this.y = y
        this.state = state
        this.width = width
        this.nextState = state
        this.swap = false
    }

    Draw( p5instance ){
        
        if(this.state == this.nextState) return

        this.state = this.nextState

        p5instance.fill( 255 * this.state )
        p5instance.stroke( (this.state - 1) * 255 )

        p5instance.rect(
            this.x * this.width, 
            this.y * this.width, 
            this.width, this.width)
    }

}