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
                this.grid[i][j] = new Cell(i, j, Math.floor(Math.random() * 2))       
            }         
        }
    }

    DrawGrid( p5instance ){
        
        this.grid.forEach( 
            (rows) => rows.forEach( 
                ( val ) => val.Draw(p5instance, this.resolution) 
            ) 
        )

    }

}