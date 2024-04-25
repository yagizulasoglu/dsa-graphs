import { UGraphNodeStr } from "../graph/graph";
import { Stack } from "../common/stack";
import { Queue } from "../common/queue";
import { vi } from "vitest";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: UGraphNodeStr,
  result: string[] = [],
  visited = new Set([start])): string[] {

  if (result.length === visited.size) return result;

  result.push(start.value);
  // visited.add(start);

  for (let node of start.adjacent) {
    if (!visited.has(node)) {
      visited.add(node);
      return rDfs(node, result, visited);
    }
  }

  return result;
}

/** Return array of nodes, in DFS order (iterative version)
 */

function iDfs(start: UGraphNodeStr): string[] {
  const toVisit = new Stack([start]);
  const seen = new Set([start]);
  const nodesArr = [];

  while (!toVisit.isEmpty()) {
    const current = toVisit.pop();
    nodesArr.push(current.value);

    for (let n of current.adjacent) {

      if (!seen.has(n)) {
        toVisit.push(n);
        seen.add(n);
      }
    }
  }

  return nodesArr;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  const toVisit = new Queue([start]);
  const seen = new Set([start]);
  const nodesArr = [];

  while (!toVisit.isEmpty()) {
    const current = toVisit.dequeue()!;

    nodesArr.push(current.value);


    for (let n of current.adjacent) {

      if (!seen.has(n)) {
        toVisit.enqueue(n);
        seen.add(n);
      }
    }
  }

  return nodesArr;
}


export { iDfs, rDfs, bfs };