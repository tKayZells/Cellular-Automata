export default class Cell {

    constructor( x, y, state, width){
        this.x = x
        this.y = y
        this.width = width
        
        this.state = state
        this.nextState = state

        this.neighbors  = []
    }

    ComputeNewState(){
        
        let count = this.neighbors.reduce( (ac, val) => ac + val.state , -this.state) 
        
        if ( this.state == 1 && (count > 3 || count < 2)) 
        {
            this.nextState = 0 
        }
        else if(this.state == 0 && count == 3)
        {
            this.nextState = 1
        }
        else
        {
            this.nextState = this.state;
        }
    }

    Draw( p5instance ){
        
        if(this.state == this.nextState) return

        this.state = this.nextState

        p5instance.fill( 255 * this.nextState )
        p5instance.stroke( (this.nextState - 1) * 255 )

        p5instance.rect(
            this.x * this.width, 
            this.y * this.width, 
            this.width, this.width)
    }

}