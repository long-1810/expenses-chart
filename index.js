const chartItemScale = 2;

function renderChartItems(data) {
  for (let i = 0; i < data.length; i++) {
    const currentItem = document.getElementById(data[i].day);
    const onActiveData = currentItem.children[0];
    const chartItem = currentItem.children[1];
    onActiveData.innerHTML = data[i].amount;
    chartItem.style.height = `${data[i].amount * chartItemScale}px`;
    
    currentItem.addEventListener("mouseover", handleMouseOver);
    currentItem.addEventListener("mouseout", handleMouseOut);
  }
}

function handleMouseOver() {
  this.children[0].style.display = "block"
}

function handleMouseOut() {
  this.children[0].style.display = "none"
}

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    renderChartItems(data);
  });
