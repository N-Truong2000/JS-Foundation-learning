let countdownA, countupA;

function countdown(ss, callback) {
  countdownA = setInterval(() => {
    console.log(ss);
    ss--;
    if (ss < 0) {
      callback();
    }
  }, 1000);
}

function countup(ss, callback) {
  let i = 0;
  countupA = setInterval(() => {
    console.log(i);
    i++;
    if (i > ss) {
      callback();
    }
  }, 1000);
}

function stop() {
  clearInterval(countdownA || countupA);
  console.log("stop success");
}

countdown(5, stop);
countup(4,stop)

