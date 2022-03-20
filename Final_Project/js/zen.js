const render = () => {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="milkyWay"> 
    <div class="sun planet"></div> 
    <div class="mercury planet"> <img src="./images/mercury.png" alt="mercury"> </div>
    <div class="venus planet"><img src="./images/Venus.png" alt="venus"></div>
    <div class="earth planet"><img src="./images/earth.png" alt="earth"></div>
    <divclass="mars planet"><img src="./images/mars.png" alt="mars"></div>
    <div class="jupiter sm planet"><img src="./images/j-sm.png" alt="jupiter"></div>
    <div class="jupiter lg planet"><img src="./images/jupiter.png" alt="jupiter"></div>
    <div class="saturn sm planet"><img src="./images/s-sm.png" alt="saturn"></div>
    <div class="saturn lg planet"><img src="./images/saturn.png" alt="saturn"></div>
    <div class="uranus sm planet"><img src="./images/u-sm.png" alt="uranus"></div>
    <div class="uranus lg planet"><img src="./images/uranus.png" alt="uranus"></div>
    <div class="neptune sm planet"><img src="./images/n-sm.png" alt="Neptune"></div>
    <div class="neptune lg planet"><img src="./images/Neptune.png" alt="Neptune"></div>
    </div>`

    // I'll just add the above to the end body tag, but you can append anywhere
    document.body.append(element)
}

window.onload = render()