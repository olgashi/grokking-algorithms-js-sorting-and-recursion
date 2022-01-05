// names are a bit weird, but trying to name so it is different from the parameter names
const pathsGraph = {
  start: {
    A: 5,
    B: 2,
  },
  A: {
    D: 2,
    C: 4
  },
  B: {
    D: 7,
  },
  C: {
    D: 6,
    finish: 3,
  },
  D: {
    finish: 1,
  }
};
const nodeCosts = {
  A: 5, B: 2, C: 9, D: 7, finish: 8
}

const parentNodes = {
  A: 'start',
  B: 'start',
  C: null,
  D: null,
  finish: null,
}

function shortestPath(graph, costs, parents, finishNode='finish') {
  let processed = [];
  let currentNode = findLowestCostNode(processed, costs);

  while (currentNode) {
    let neighbors = graph[currentNode];
    let currentNodeCost = costs[currentNode];

    for (const neighborNode in neighbors) {
      let newCost = currentNodeCost + costs[neighborNode];

      if (newCost < costs[neighborNode]) {
        costs[neighborNode] = newCost;
        parents[neighborNode] = currentNode;
      }
    }
    processed.push(currentNode);
    currentNode = findLowestCostNode(processed, costs);
  }
  return costs[finishNode];
}

function findLowestCostNode(processedNodes, nodeCosts) {
  let lowestCostNode = null;
  let lowestCost = Number.POSITIVE_INFINITY;

  Object.keys(nodeCosts).forEach(node => {
    if (!processedNodes.includes(node)) {
      if (nodeCosts[node] < lowestCost) {
        lowestCost = nodeCosts[node];
        lowestCostNode = node;
      }
    }
  });
  return lowestCostNode;
}

console.log(shortestPath(pathsGraph, nodeCosts, parentNodes));