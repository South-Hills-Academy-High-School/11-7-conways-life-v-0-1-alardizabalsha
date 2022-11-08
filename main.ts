namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const newcursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorgrid_row += -1
    cursor_y += -10
    drawgrid()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    grid[cursorgrid_row][cursorgrid_column] = grid[cursorgrid_row][cursorgrid_column] * -1 + 1
    drawgrid()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorgrid_column += -1
    cursor_x += -10
    drawgrid()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorgrid_column += 1
    cursor_x += 10
    drawgrid()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorgrid_row += 1
    cursor_y += 10
    drawgrid()
})
function drawgrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    gridsprites = []
    current_y = 0
    for (let row of grid) {
        current_x = 0
        for (let gridspace of row) {
            if (gridspace == 1) {
                gridsprite = sprites.create(img`
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    `, SpriteKind.Player)
                gridsprite.left = current_x
                gridsprite.top = current_y
                gridsprites.push(gridsprite)
            }
            current_x += 10
        }
        current_y += 10
    }
    cursor.top = cursor_x
    cursor.z = cursor_y
}
let gridsprite: Sprite = null
let current_x = 0
let current_y = 0
let gridsprites: Sprite[] = []
let cursor_y = 0
let cursor_x = 0
let cursorgrid_row = 0
let cursorgrid_column = 0
let cursor: Sprite = null
let grid: number[][] = []
grid = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let column = 0; column <= 11; column++) {
        grid[row].push(1)
    }
}
cursor = sprites.create(img`
    3 3 3 3 . . 3 3 3 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    . . . . . . . . . . 
    . . . . . . . . . . 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 3 3 3 . . 3 3 3 3 
    `, SpriteKind.newcursor)
cursorgrid_column = 0
cursorgrid_row = 0
cursor_x = 0
cursor_y = 0
cursor.left = cursor_x
drawgrid()
