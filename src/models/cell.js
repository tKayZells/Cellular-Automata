let tinygradient = require("tinygradient")
let gradient = tinygradient([ "rgb(235, 120, 249)", "rgb(0, 0, 0)" ])

export default class Cell {


    

    constructor( x, y, state, width){
        this.x = x
        this.y = y
        this.width = width
        
        this.state = state
        this.nextState = state

        this.totalDeathtime = 0.0
        this.totalLifetime  = 0.0
        this.neighbors  = []
        
        this.colors = gradient.hsv(15, 'short');
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
        else if(this.state == 0 && this.totalDeathtime == 1 && Math.random() > 0.9)
        {
            this.nextState = 1
        }
        else
        {
            this.nextState = this.state;
        }

        this.totalLifetime += this.nextState == 0 ? -0.05 : 0.05
        this.totalDeathtime = this.nextState != 0 ? 0 : this.totalDeathtime + 0.001

        this.totalDeathtime = Math.min(Math.max(this.totalDeathtime, 0), 1)
        this.totalLifetime = Math.min(Math.max(this.totalLifetime, 0.1), 1)
    }

    Draw( p5instance ){
        
        if(this.state == this.nextState) 
            return
        
        this.state = this.nextState

        // let grayColor = 150 * this.totalLifetime    
        // let alpha     = 255 * this.totalLifetime

        // let c = p5instance.color( grayColor,  alpha)
        
        let index = Math.ceil(this.totalLifetime * 15)
        index = index < 1 ? 0 : index > 14 ? 14 : index;

        p5instance.fill(this.colors[ index ].toHexString())
        p5instance.stroke(this.colors[ index ].toHexString())

        // GrayScale
        // p5instance.fill( c )
        // p5instance.stroke(c )

        // FlatBlackwhite
        // p5instance.fill( 255 * this.nextState )
        // p5instance.stroke( (this.nextState - 1) * 255 )

        p5instance.rect(
            this.x * this.width , 
            this.y * this.width, 
            this.width, this.width)
    }

}