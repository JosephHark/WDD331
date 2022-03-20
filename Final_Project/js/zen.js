const render = () => {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="milkyWay">
	<div class="sun planet"></div>
	<div class="mercury planet"></div>
	<div class="venus planet"></div>
	<div class="earth planet"></div>
	<div class="mars planet"></div>
	<div class="jupiter planet"></div>
	<div class="saturn planet"></div>
	<div class="uranus planet"></div>
	<div class="neptune planet"></div>
</div>`

    // I'll just add the above to the end body tag, but you can append anywhere
    document.body.append(element)
}

window.onload = render()