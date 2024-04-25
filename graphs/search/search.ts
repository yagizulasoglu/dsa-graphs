import { UGraphNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: UGraphNodeStr,
    result: string[] = [],
    visited = new Set([start])): string[] {
  return ["todo"];
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): string[] {
  return ["todo"];
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };