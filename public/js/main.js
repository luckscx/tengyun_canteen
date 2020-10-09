
const getImgPos = (e) => {
    console.log(e)
    const touch = e.touches[0]
    console.log(touch);
    pageX = e.touches[0].pageX
    pageY = e.touches[0].pageY
    console.log(pageX,pageY)
    img_dom = e.target
    img_x_perc = (pageX - img_dom.offsetLeft) / img_dom.width
    img_y_perc = (pageY - img_dom.offsetTop) / img_dom.height
    console.log("x",img_x_perc);
    console.log("y",img_y_perc);
};

const registerEvent = () => {
  console.log("registerEvent");
  const main_div = document.getElementById('main')
  main_div.addEventListener("touchstart", (e) => {
    getImgPos(e)
  })
}

console.log("111");

window.onload = registerEvent
