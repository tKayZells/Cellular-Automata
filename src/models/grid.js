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
        
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.grid[i][j].neighbors = this._Neightbours(i, j)
            }         
        }
    }

    ComputeNext() {
        
        this.grid.forEach( (rows) => rows.forEach( 
            ( val ) => val.ComputeNewState()
        ))
        
    }

    DrawGrid( p5instance ){
        
        this.grid.forEach( (rows) => rows.forEach( 
                ( val ) => val.Draw(p5instance) 
            ) 
        )

    }
    
    _Neightbours( x, y){
        
        let neightbours = []

        for (let i = -1; i < 2; i++){
            for(let j = -1 ; j < 2; j++)
            {
                let col = (x + i + this.cols) % this.cols
                let row = (y + j + this.rows) % this.rows
                neightbours.push( this.grid[col][row] )
            } 
        }

        return neightbours
    }


}