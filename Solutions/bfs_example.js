const mangoSellersGraph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
}

const isMangoSeller = (sellerName) => {
  const mangoSellers = ['jonny'];
  return mangoSellers.includes(sellerName);
}

function bfs(graph, root) {
  let queue = graph[root];
  let visited = [];

  while (queue.length > 0) {
    let currentNode = queue.shift();

    if (!visited.includes(currentNode)) {
      if (isMangoSeller(currentNode)) {
        return currentNode;
      } else {
        visited.push(currentNode);
        queue.push(...graph[currentNode]);
      }
    }
  }
  return null;
}

console.log(bfs(mangoSellersGraph, 'anuj'));
