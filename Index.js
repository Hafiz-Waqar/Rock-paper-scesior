audio = new Audio('rps.mp3');
audio.play(); 
function rpsg(yourchoice){
    var hc, cc;
    hc = yourchoice.id;
    cc = nc(botc());
    result = dw(hc,cc);
    msg = fm(result);
    FE(yourchoice.id, cc, msg);
}
function botc(){
    return Math.floor(Math.random()*3);
}
function nc(num){
    return ['Rock', 'paper', 'sce'][num];
}
function dw(yc, cc){
    var db = {
        'Rock':{'sce': 1, 'Rock': 0.5, 'paper':0},
        'paper':{'Rock': 1, 'paper':0.5, 'sce':0},
        'sce':{'paper':1, 'sce': 0.5, 'Rock':0}
    };
    var yr = db[yc][cc];
    var cr = db[cc][yc];
    return [yr, cr];
}
function fm([yr, cr]){
    if (yr === 0){
        return {'message': 'You Lost', 'color': 'red'}
    }
    else if (yr === 0.5){
        return {'message': 'Match Tied', 'color': 'yellow'}
    }
    else{
        return {'message': 'You Win', 'color': 'Green'}
    }
}

function FE(hic, bic, fm){
    var imdb = {
        'Rock': document.getElementById('Rock').src,
        'paper': document.getElementById('paper').src,
        'sce': document.getElementById('sce').src
    }
    document.getElementById('Rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('sce').remove();



    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');


    humanDiv.innerHTML = "<img src ='" + imdb[hic] +"' height = 150 width = 150>"
    messageDiv.innerHTML = "<h1 style = 'color: " + fm['color'] + "; font-size:60px; padding:30px'>" + fm['message'] + "</h1>"
    botDiv.innerHTML = "<img src ='" + imdb[bic] +"' height = 150 width = 150>"
    

    document.getElementById('fbrps').appendChild(humanDiv);
    document.getElementById('fbrps').appendChild(messageDiv);
    document.getElementById('fbrps').appendChild(botDiv);
}