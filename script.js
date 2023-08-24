console.log("TicTacToe");

let eles = Array.from(document.getElementsByClassName("item"));
let ref = document.getElementById("ref");
let X = document.getElementById("X");
let O = document.getElementById("O");

function refresh(){
    eles.forEach((element,i)=>{
        element.innerHTML = "";
        toggle = 1;
    });
}

function check(eles,ind,toggle){
    if(toggle==1){  //x has moved
        if(ind==0){
            if(eles[0].innerHTML=='X' && eles[1].innerHTML=='X'&& eles[2].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[0].innerHTML=='X' && eles[3].innerHTML=='X'&& eles[6].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[0].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[8].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }
        }else if(ind==1){
            if(eles[0].innerHTML=='X' && eles[1].innerHTML=='X'&& eles[2].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[1].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[7].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }
        }else if(ind==2){
            if(eles[0].innerHTML=='X' && eles[1].innerHTML=='X'&& eles[2].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='X' && eles[5].innerHTML=='X'&& eles[8].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[6].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }
        }else if(ind==3){
            if(eles[0].innerHTML=='X' && eles[3].innerHTML=='X'&& eles[6].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[3].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[5].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }
        }else if(ind==4){
            if(eles[3].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[5].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[0].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[8].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[1].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[7].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[6].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }
        }else if(ind==5){
            if(eles[3].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[5].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='X' && eles[5].innerHTML=='X'&& eles[8].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }
        }else if(ind==6){
            if(eles[0].innerHTML=='X' && eles[3].innerHTML=='X'&& eles[6].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[6].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[6].innerHTML=='X' && eles[7].innerHTML=='X'&& eles[8].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }
        }else if(ind==7){
            if(eles[1].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[7].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[6].innerHTML=='X' && eles[7].innerHTML=='X'&& eles[8].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }
        }else if(ind==8){
            if(eles[6].innerHTML=='X' && eles[7].innerHTML=='X'&& eles[8].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='X' && eles[5].innerHTML=='X'&& eles[8].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }else if(eles[0].innerHTML=='X' && eles[4].innerHTML=='X'&& eles[8].innerHTML=='X'){
                console.log("X has won");
                X.innerHTML = parseInt(X.innerHTML)+1;
                refresh();
            }
        }
    }else if(toggle==0){
        if(ind==0){
            if(eles[0].innerHTML=='O' && eles[1].innerHTML=='O'&& eles[2].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[0].innerHTML=='O' && eles[3].innerHTML=='O'&& eles[6].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[0].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[8].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }
        }else if(ind==1){
            if(eles[0].innerHTML=='O' && eles[1].innerHTML=='O'&& eles[2].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[1].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[7].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }
        }else if(ind==2){
            if(eles[0].innerHTML=='O' && eles[1].innerHTML=='O'&& eles[2].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='O' && eles[5].innerHTML=='O'&& eles[8].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[6].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }
        }else if(ind==3){
            if(eles[0].innerHTML=='O' && eles[3].innerHTML=='O'&& eles[6].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[3].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[5].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }
        }else if(ind==4){
            if(eles[3].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[5].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[0].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[8].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[1].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[7].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[6].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }
        }else if(ind==5){
            if(eles[3].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[5].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='O' && eles[5].innerHTML=='O'&& eles[8].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }
        }else if(ind==6){
            if(eles[0].innerHTML=='O' && eles[3].innerHTML=='O'&& eles[6].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[6].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[6].innerHTML=='O' && eles[7].innerHTML=='O'&& eles[8].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }
        }else if(ind==7){
            if(eles[1].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[7].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[6].innerHTML=='O' && eles[7].innerHTML=='O'&& eles[8].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }
        }else if(ind==8){
            if(eles[6].innerHTML=='O' && eles[7].innerHTML=='O'&& eles[8].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[2].innerHTML=='O' && eles[5].innerHTML=='O'&& eles[8].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }else if(eles[0].innerHTML=='O' && eles[4].innerHTML=='O'&& eles[8].innerHTML=='O'){
                console.log("O has won");
                O.innerHTML = parseInt(O.innerHTML)+1;
                refresh();
            }
        }
    }
    
}

let toggle = 1;
eles.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        if(toggle==1){
            element.innerHTML = 'X';
            let ind  = parseInt(e.target.id)-1;
            check(eles,ind,toggle);
            toggle = 0;
        }else{
            element.innerHTML = 'O';
            let ind  = parseInt(e.target.id)-1;
            check(eles,ind,toggle);
            toggle = 1;
        }
    })
});

ref.addEventListener('click',()=>{
    refresh()
});