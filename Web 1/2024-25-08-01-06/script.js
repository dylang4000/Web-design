const player =           document.getElementById('player')
const playerpupils =     player.getElementById('pupils')
const playerleftpupil =  playerpupils.children[0]
const playerrightpupil = playerpupils.children[1]


document.body.addEventListener('keyup' ,(e)=>{
    if (e.key === "ArrowUp" || e.key === 'w'){
        
        const playertilenum=parseInt(player.getAttribute('data-tilenum'))
        const targettile=playertilenum-1
        moveplayer(targettile.toString())
        console.log(`move to ${targettile}`)
        playerleftpupil.setAttribute('x',32)
        playerrightpupil.setAttribute('x',80)
        playerleftpupil.setAttribute('y',24)
        playerrightpupil.setAttribute('y',24)
        
        setInterval(resetpupiles,200)
    }
    if (e.key === "ArrowDown" || e.key === 's'){
        playerleftpupil.setAttribute('x',32)
        playerrightpupil.setAttribute('x',80)
        playerleftpupil.setAttribute('y',40)
        playerrightpupil.setAttribute('y',40)
        
        setInterval(resetpupiles,200)
    }
    if (e.key === "ArrowRight" || e.key === 'd'){
        
        const playertilenum=parseInt(player.getAttribute('data-tilenum'))
        const targettile=playertilenum+4
        moveplayer(String(targettile))
        playerleftpupil.setAttribute('y',32)
        playerrightpupil.setAttribute('y',32)
        playerleftpupil.setAttribute('x',40)
        playerrightpupil.setAttribute('x',88)
        
        setInterval(resetpupiles,200)
    }
    if(e.key == "ArrowLeft" || e.key === 'a'){
        console.log('movelft')
        playerleftpupil.setAttribute('y',32)
        playerrightpupil.setAttribute('y',32)
        playerleftpupil.setAttribute('x',24)
        playerrightpupil.setAttribute('x',72)
        
        setInterval(resetpupiles,200)
    }
})

function resetpupiles(){
    playerleftpupil.setAttribute('y',32)
    playerrightpupil.setAttribute('y',32)
    playerleftpupil.setAttribute('x',32)
    playerrightpupil.setAttribute('x',80)

}
pathtiles = []

document.getElementById('dylan-map').querySelectorAll('rect').forEach(rect =>{
    const dataispath=rect.getAttribute('data-ispath');
    if (dataispath !== null && dataispath === "true"){
        pathtiles.push(rect);
    }
        
})


tile8=pathtiles.find((t)=>t.getAttribute('data-tilenum') === '8')

function moveplayer(tilenum){
    const targettile=pathtiles.find((t)=> t.getAttribute('data-tilenum') === tilenum)
    player.setAttribute('x', targettile.getAttribute('x'))
    player.setAttribute('y', targettile.getAttribute('y'))
}







//document.getElementById('dylan-map').querySelectorAll('rect').forEach(rect =>{
//    const datatilenum=rect.getAttribute('data-tilenum');
//    if (datatilenum !== null){
//        console.log(rect)
//    }
//        
//})

