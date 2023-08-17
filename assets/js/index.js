
function play(name) {
    var sound = new Audio(`../assets/sounds/${name}.wav`)
    
    sound.play()
        
}

document.addEventListener('keydown', 
(event)=> {
    document.getElementById(event.key).style.background= '#000000'
    if (event.key =='a'){

        play('boom')
    }
    if (event.key =='s'){
        play('clap')
    }
    if (event.key =='d'){
        play('hihat')
    }
    if (event.key =='f'){
        play('kick')
    }
    if (event.key =='g'){
        play('openhat')
    }
    if (event.key =='h'){
        play('ride')
    }
    if (event.key =='j'){
        play('snare')
    }
    if (event.key =='k'){
        play('tink')
    }

    if (event.key =='l'){
        play('tom')
    }
})
document.addEventListener('keyup', 
(event)=> {
    document.getElementById(event.key).style.background='#00000082'})