// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  switch (block) {
    case block >= 42:
      return block - 42;
      break;

    default:
      return 42 - block;
      break;
  }
}
