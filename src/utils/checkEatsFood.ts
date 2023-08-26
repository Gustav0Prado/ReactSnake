import { Coordinate } from "../types/types";

export const checkEatsFood = (
   head: Coordinate,
   food: Coordinate,
   area: number
): boolean => {
   const distance_FS_X: number = Math.abs(head.x - food.x);
   const distance_FS_Y: number = Math.abs(head.y - food.y);
   return distance_FS_X < area && distance_FS_Y < area;
};
