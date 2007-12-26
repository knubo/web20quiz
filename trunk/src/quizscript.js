function loadNextPage() {
   document.location = pageToLoad;
}

function doPuff(nextpage) {
   pageToLoad = nextpage;
   new Effect.Puff('everything', { afterFinish:loadNextPage });
}