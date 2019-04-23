import Cell from "./cell"

export default class Grid {

    constructor( cols, rows, resolution ){

        this.cols = cols
        this.rows = rows
        this.resolution = resolution

        this.InitGrid()

    }

    InitGrid(){
        this.grid = Array.from( Array(this.cols), () => new Array(this.rows) )
        
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.grid[i][j] = new Cell(i, j, Math.floor(Math.random() * 2), this.resolution)       
            }         
        }
        
    }
    
    ComputeNext() {
        
        this.grid.forEach( (rows) => rows.forEach( 
            ( val ) => {
                
                let count = this._CountLiveNeightbours(val.x, val.y)

                if ( val.state == 1 && (count > 3 || count < 2)) 
                {
                    val.nextState = 0 
                }
                else if(val.state == 0 && count == 3)
                {
                    val.nextState = 1
                }
                else
                {
                    val.nextState = val.state;
                }
            }
        ))
        
    }

    _CountLiveNeightbours( x, y){
        let sum = -this.grid[x][y].state

        for (let i = -1; i < 2; i++){
            for(let j = -1 ; j < 2; j++)
            {
                let col = (x + i + this.cols) % this.cols
                let row = (y + j + this.rows) % this.rows
                sum += this.grid[ col ][ row ].state
            } 
        }

        return sum
    }

    DrawGrid( p5instance ){
        
        this.grid.forEach( 
            (rows) => rows.forEach( 
                ( val ) => val.Draw(p5instance, this.resolution) 
            ) 
        )

    }

}