import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  const visited = new Queue([start]);
  const seen: {node: UGraphNodeStr; distance: number}[] = [];

  seen.push({node: start, distance: 0});

  while(!visited.isEmpty()) {
    let current = visited.dequeue()!;
    console.log(current, "current");
    if(current === sought) return (seen[seen.length - 1]).distance;
    let currentDistance = seen[seen.length - 1].distance;

    for (const adj of current.adjacent) {
      let isThere = false;
      for (let n of seen) {
        if (n.node === adj) {
          isThere = true
        }
      }
      if(!isThere) {
        seen.push({node: adj, distance: (currentDistance + 1)})
        visited.enqueue(adj);
      }
    }
  }

  return Infinity;
}

export { fewestEdges };
