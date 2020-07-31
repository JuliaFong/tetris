import { useState, useCallback } from 'react';

import { TETROMINOS } from '../tetrominos';
import { START_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
   const [player, setPlayer] = useState({
       pos: { x: 0, y: 0 },
       tetromino: TETROMINOS.shape,
       collided: false,
   });

   const updatePlayerPos = ({ x, y, collided }) => {
       setPlayer(prev => ({
           ...prev,
           pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
           collided,
       }))
   };

   const resetPlayer = useCallback(() => {
    setPlayer({
        pos: { x: START_WIDTH / 2 - 2, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    })
    }, [])

   return[player, updatePlayerPos, resetPlayer];
}

