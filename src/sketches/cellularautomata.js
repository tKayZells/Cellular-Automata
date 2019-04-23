import Grid from "../models/grid";

const ca = ( p5 ) => {

    const RESOLUTION = 10
    var cols       = -1
    var rows       = -1
    var grid       = {}

    function InitGrid(){
        
        cols = p5.floor( p5.width / RESOLUTION )
        rows = p5.floor( p5.height / RESOLUTION )

        grid = new Grid(cols, rows, RESOLUTION)
        
    }

    p5.setup = () => {  
        let canvas = p5.createCanvas(600, 600)
        canvas.background(44, 44, 44)

        InitGrid()
    }

    p5.draw = () => {
        grid.DrawGrid( p5 )
    }

}

export default ca
