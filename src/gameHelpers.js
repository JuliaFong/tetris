
export const START_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
Array.from(Array(STAGE_HEIGHT), () =>
    new Array(START_WIDTH).fill([0, "clear"])
)

export const checkCollision = (player, stage, { x: moveX, y: moveY}) => {
    for(let y = 0; y < player.tetromino.length; y +=1) {
        for (let x = 0; x < player.tetromino[0].length; x +=1) {
            //check we're on a tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                    // check movement is inside the game height (y)
                    // shouldn't go through the bottom
                    !stage[y + player.pos.y + moveY] || 
                    // check tetromino doesn't move outside width(x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x.moveX] ||
                     //check the cell isn't set to clear
                     stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 
                     "clear"
                ) {
                    return true;
                }

            }
        }
    }
};