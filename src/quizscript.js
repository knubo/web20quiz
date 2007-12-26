function loadNextPage() {
   document.location = pageToLoad;
}

function doPuff(nextpage) {
   pageToLoad = nextpage;
   new Effect.Puff('everything', { afterFinish:loadNextPage });
}


function doNext(nextpage) {
   pageToLoad = nextpage;
   new Effect.DropOut('everything', { afterFinish:loadNextPage });
}
