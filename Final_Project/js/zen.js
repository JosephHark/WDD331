const render = () => {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="milkyWay">
	<div class="sun planet"></div>
  
	<div class="mercury planet" id="moveMercury"></div>
  
	<div class="venus planet" id="moveVenus"></div>
  
	<div class="earth planet" id="moveEarth"></div>
  
	<div class="mars planet" id="moveMars"></div>
  
	<div class="jupiter planet" id="moveJupiter"></div>
  
	<div class="saturn planet" id="moveSaturn"></div>
  
	<div class="uranus planet" id="moveUranus"></div>
  
	<div class="neptune planet" id="moveNeptune"></div>
</div>`

    // I'll just add the above to the end body tag, but you can append anywhere
    document.body.append(element)
}

window.onload = render()
var rotatePlanets = (function() {
    
function getPosition(settings, ellapsedTime) {
        var angle = getAngle(settings, ellapsedTime);
        return {
            x: Math.round(settings.center.x + settings.radius * Math.cos(angle)),
            y: Math.round(settings.center.y + settings.radius * Math.sin(angle))
        };
    }
    
function getAngle(settings, ellapsedTime) {
        return ellapsedTime / settings.interval * 2 * Math.PI * settings.direction - settings.startPositionRad;
    }
    
function start(id, settings) {
        var el = document.getElementById(id),
            startTime = (new Date()).getTime(),
            width = el.offsetWidth,
            height = el.offsetHeight;
        if(el['#rot:pl'] !== null) stop(id);
        el.style.position = settings.cssPosition || 'absolute';
        if(!settings.startPositionRad) settings.startPositionRad = settings.startPositionDeg / 180 * Math.PI;
        el['#rot:pl'] = setInterval(function() {
            var pos = getPosition(settings, (new Date()).getTime() - startTime);
            el.style.left = (pos.x - Math.round(width / 2)) + 'px';
            el.style.top = (pos.y - Math.round(height / 2)) + 'px';
        }, settings.updateInterval);
        if(settings.iterations > -1) setTimeout(function() {
            stop(id);
        }, settings.iterations * settings.interval);
    }
    
    function stop(id) {
        var el = document.getElementById(id);
        if(el['#rot:pl'] === null) return;
        clearInterval(el['#rot:pl']);
        el['#rot:pl'] = null;
    }
    
    return {
        start: start,
        stop: stop
    };
    
})();

rotatePlanets.start('moveMercury', {
    radius: 150,
    center: { x: 65, y: 60 },
    interval: 8800,
    direction: 1,
    iterations: -1,
    startPositionDeg: 175,  
    updateInterval: 50
});

rotatePlanets.start('moveVenus', {
    radius: 175,
    center: { x: 85, y: 85 },
    interval: 9000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 350,  
    updateInterval: 50
});

rotatePlanets.start('moveEarth', {
    radius: 240,
    center: { x: 110, y: 110 },
    interval: 10000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 125,  
    updateInterval: 50
});

rotatePlanets.start('moveMars', {
    radius: 250,
    center: { x: 65, y: 60 },
    interval: 11000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 175,  
    updateInterval: 50
});

rotatePlanets.start('moveJupiter', {
    radius: 325,
    center: { x: 65, y: 60 },
    interval: 14000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 175,  
    updateInterval: 50
});

rotatePlanets.start('moveSaturn', {
    radius: 400,
    center: { x: 65, y: 60 },
    interval: 15000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 175,  
    updateInterval: 50
});

rotatePlanets.start('moveUranus', {
    radius: 450,
    center: { x: 65, y: 60 },
    interval: 16000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 175,  
    updateInterval: 50
});

rotatePlanets.start('moveNeptune', {
    radius: 525,
    center: { x: 65, y: 60 },
    interval: 18000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 175,  
    updateInterval: 50
});