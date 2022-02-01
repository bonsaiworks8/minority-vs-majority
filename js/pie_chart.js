const drawPieChart = (yes, no) => {
  let total = yes + no;
  let percentage = (no / total) * 100;
  let pie = document.getElementById('pie0');
  pie.style.backgroundImage = 'radial-gradient(#fff 60%, transparent 61%), conic-gradient(#00f 0% ' + percentage + '%, #f00 ' + percentage + '% 100%)';
}

const setPieChart = (yes, no) => {
  let total = yes + no;
  let noCount = 0;
  let delta = no / 10;

  let timerId = setInterval(() => {
    drawPieChart(total - noCount, noCount);

    noCount += delta;
    if (noCount >= no) {
      noCount = no;
      drawPieChart(yes, no);
      clearInterval(timerId);
    }

  }, 60);
}

setPieChart(35, 5);
