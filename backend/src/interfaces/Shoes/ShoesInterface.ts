

enum color {

    black = "balck",
    white = "white",
    red = "red",
    blue = "blue"
}

enum brand {

    converse = "converse",
    formal = "formal",
    nike = "nike",
    adidas = "adidas"
}

export interface ShoesInterface {

    color : string,
    size : number,
    brand : string,
    style : string
}