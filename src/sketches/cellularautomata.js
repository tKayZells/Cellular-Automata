import Grid from "../models/grid";

const ca = ( p5 ) => {

    var resolution = 5
    var cols       = -1
    var rows       = -1
    var grid       = {}

    function InitGrid(){
        
        cols = p5.floor( p5.width / resolution )
        rows = p5.floor( p5.height / resolution )

        grid = new Grid(cols, rows, resolution)
        
    }

    p5.setup = () => {  
        let canvas = p5.createCanvas(1024, 450)
        canvas.background(0)
        InitGrid()
        p5.frameRate(30)
    }

    p5.draw = () => {
        grid.DrawGrid( p5 )
        grid.ComputeNext()
    }

}

export default ca
