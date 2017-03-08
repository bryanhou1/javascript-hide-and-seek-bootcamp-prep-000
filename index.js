function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rnkList=document.querySelectorAll('.ranked-list li');

  for(var i=0;i<rnkList.length;i++){
    rnkList[i].innerHTML= n+parseInt(rnkList[i].innerHTML,10);
  }
  return rnkList;
}

function deepestChild() {
  let startingPt=document.getElementById('grand-node');
  let current= startingPt.children[0];
  let prev;
  while (current){
    prev=current;
    current=current.children[0];
  }
  return prev;
}
