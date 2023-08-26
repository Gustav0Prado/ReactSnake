import { Coordinate } from "../types/types";

export const checkGameOver = (
   snakehead: Coordinate,
   boundaries: any
): boolean => {
   return (
      snakehead.x < boundaries.xMin ||
      snakehead.y < boundaries.yMin ||
      snakehead.x > boundaries.xMax ||
      snakehead.y > boundaries.yMax
   );
};
