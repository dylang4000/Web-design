const svg = document.querySelector('svg');
let selectedFillColor = undefined;
let selectedStrokeColor = undefined;

for (let x = 0; x <= 600; x+=60) {
    for (let y = 0; y <= 600; y+=60) {
        console.log(`(${x},${y})`);
        const ns = "http://www.w3.org/2000/svg";
        const rect = document.createElementNS(ns, 'rect');
        rect.setAttribute('width', 60);
        rect.setAttribute('height', 60);
        if (selectedStrokeColor === undefined) {
            rect.setAttribute('stroke', "black");
        }
        else {
            rect.setAttribute('stroke', selectedStrokeColor);
        }
        
        if (selectedFillColor === undefined) {
            rect.setAttribute('fill', "white");
        }
        else {
            rect.setAttribute('fill', selectedFillColor);
        }
        
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.addEventListener('click', (e)=> {
            console.log(`you clicked me. my x position is ${rect.getAttribute("x")}`);
            rect.setAttribute('stroke', selectedStrokeColor);
            rect.setAttribute('fill', selectedFillColor);
        })
        svg.appendChild(rect);
    }
}

const fillColor = document.getElementById('fillColor');
fillColor.addEventListener('change', (e)=> {
    selectedFillColor = fillColor.value;
});

const strokeColor = document.getElementById('strokeColor');
strokeColor.addEventListener('change', (e)=> {
    selectedStrokeColor = strokeColor.value;
});

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', (e)=> {
    svg.querySelectorAll('rect').forEach((rect)=> {
        rect.setAttribute("fill", "white");
        rect.setAttribute("stroke", "black");
    });
});