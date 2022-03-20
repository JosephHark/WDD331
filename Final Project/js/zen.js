const render = () => {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="milkyWay"> 
    <div class="sun"></div> 
    <div class="mercury"> <img src="./images/mercury.png" alt="mercury"> </div>
    <div class="venus"><img src="./images/Venus.png" alt="venus"></div>
    <div class="earth"><img src="./images/earth.png" alt="earth"></div>
    <divclass="mars"><img src="./images/mars.png" alt="mars"></div>
    <div class="jupiter"><img src="./images/jupiter.png" alt="jupiter"></div>
    <div class="saturn"><img src="./images/saturn.png" alt="saturn"></div>
    <div class="uranus"><img src="./images/uranus.png" alt="uranus"></div>
    <div class="neptune"><img src="./images/Neptune.png" alt="Neptune"></div>
    </div>`

    // I'll just add the above to the end body tag, but you can append anywhere
    document.body.append(element)
}

window.onload = render()