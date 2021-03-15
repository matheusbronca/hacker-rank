function queensAttack(
  tableSize,
  obstaclesLength,
  queenRow,
  queenColumn,
  obstacles
) {
  let directions = {
    TOP: tableSize - queenRow,
    BOTTOM: queenRow - 1,
    LEFT: queenColumn - 1,
    RIGHT: tableSize - queenColumn,
    TOP_LEFT: Math.min(tableSize - queenRow, queenColumn - 1),
    TOP_RIGHT: Math.min(tableSize - queenRow, tableSize - queenColumn),
    BOTTOM_LEFT: Math.min(queenRow - 1, queenColumn - 1),
    BOTTOM_RIGHT: Math.min(queenRow - 1, tableSize - queenColumn),
  };

  obstacles.forEach((obstacle) => {
    if (obstacle[0] === queenRow) {
      if (obstacle[1] > queenColumn)
        if (obstacle[1] - queenColumn - 1 < directions.RIGHT)
          directions.RIGHT = obstacle[1] - queenColumn - 1;

      if (obstacle[1] < queenColumn)
        if (queenColumn - obstacle[1] - 1 < directions.LEFT)
          directions.LEFT = queenColumn - obstacle[1] - 1;
    }

    if (obstacle[1] === queenColumn) {
      if (obstacle[0] > queenRow)
        if (obstacle[0] - queenRow - 1 < directions.TOP)
          directions.TOP = obstacle[0] - queenRow - 1;

      if (obstacle[0] < queenRow)
        if (queenRow - obstacle[0] - 1 < directions.BOTTOM)
          directions.BOTTOM = queenRow - obstacle[0] - 1;
    }

    if (obstacle[0] > queenRow && obstacle[1] > queenColumn) {
      if (obstacle[0] - queenRow === obstacle[1] - queenColumn)
        if (obstacle[0] - queenRow - 1 < directions.TOP_RIGHT)
          directions.TOP_RIGHT = obstacle[0] - queenRow - 1;
    }

    if (obstacle[0] > queenRow && obstacle[1] < queenColumn) {
      if (obstacle[0] - queenRow === queenColumn - obstacle[1])
        if (obstacle[0] - queenRow - 1 < directions.TOP_LEFT)
          directions.TOP_LEFT = obstacle[0] - queenRow - 1;
    }

    if (obstacle[0] < queenRow && obstacle[1] > queenColumn) {
      if (queenRow - obstacle[0] === obstacle[1] - queenColumn) {
        if (queenRow - obstacle[0] - 1 < directions.BOTTOM_RIGHT)
          directions.BOTTOM_RIGHT = queenRow - obstacle[0] - 1;
      }
    }

    if (obstacle[0] < queenRow && obstacle[1] < queenColumn) {
      if (queenRow - obstacle[0] === queenColumn - obstacle[1])
        if (queenRow - obstacle[0] - 1 < directions.BOTTOM_LEFT)
          directions.BOTTOM_LEFT = queenRow - obstacle[0] - 1;
    }
  });

  for (const [key, value] of Object.entries(directions)) {
    console.log(`${key}: ${value}`);
  }

  return Object.values(directions).reduce((acc, val) => acc + val, 0);
}
