// chess에 block으로 이루어진 chessboard구현
//   block -> whiteBlock, blackBlock
// block의 프로퍼티로 peice를 가짐
//   peice -> whitePawn, blackPawn...

// chess.js
// const chess = Chess(id); // 초기화 및 객체 생성, id : default chessboard
// chess.Rule.property // Rule의 프로퍼티로 게임 룰을 세부적으로 설정 가능
// chess.definePeice(property) // 새로운 peice를 정의 가능
// chess.Event.property // Event의 프로퍼티로 이벤트 추가 가능
// window.onload = () => document.add(chess.createChessBoard([peiceSettingInfo])); chessboard를 html로 생성하여 값을 반환
// chessinit.js

function WhiteBlock(peice) {
    this.position = {
        x : null,
        y : null
    };
    this.createBlock = () => {
        let block = document.createElement("td");
        block.className = "white-block";
        const ev = this.ev;
        for(var key in ev) {
            block.addEventListener(key, ev[key]);
        }
        if(peice) {
            block.appendChild(peice.createPeice());
        }

        return block;
    };
    this.ev = {
        onmousedown : () => {}
    };
}

function BlackBlock(peice) {
    this.position = {
        x : null,
        y : null
    };
    this.createBlock = () => {
        let block = document.createElement("td");
        block.className = "black-block";
        const ev = this.ev;
        for(var key in ev) {
            block.addEventListener(key, ev[key]);
        }
        if(peice) {
            block.appendChild(peice.createPeice());
        }

        return block;
    };
    this.ev = {
        onmousedown : () => {}
    };
}

function Pawn(team) {
    this.createPeice = () => {
        let peice = document.createElement("div");
        if(team) {
            peice.className = "black-pawn";
        }
        else {
            peice.className = "white-pawn";
        }
        return peice;
    }; 
    ev = {
        mousedown : () => {},
        mousemove : () => {},
        mouseup : () => {}
    };
}

function Knight(team) {
    this.createPeice = () => {
        let peice = document.createElement("div");
        if(team) {
            peice.className = "black-knight";
        }
        else {
            peice.className = "white-knight";
        }
        return peice;
    }; 
    ev = {
        mousedown : () => {},
        mousemove : () => {},
        mouseup : () => {}
    };
}

function Bishop(team) {
    this.createPeice = () => {
        let peice = document.createElement("div");
        if(team) {
            peice.className = "black-bishop";
        }
        else {
            peice.className = "white-bishop";
        }
        return peice;
    }; 
    ev = {
        mousedown : () => {},
        mousemove : () => {},
        mouseup : () => {}
    };
}

function Rook(team) {
    this.createPeice = () => {
        let peice = document.createElement("div");
        if(team) {
            peice.className = "black-rook";
        }
        else {
            peice.className = "white-rook";
        }
        return peice;
    }; 
    ev = {
        mousedown : () => {},
        mousemove : () => {},
        mouseup : () => {}
    };
}

function Queen(team) {
    this.createPeice = () => {
        let peice = document.createElement("div");
        if(team) {
            peice.className = "black-queen";
        }
        else {
            peice.className = "white-queen";
        }
        return peice;
    }; 
    ev = {
        mousedown : () => {},
        mousemove : () => {},
        mouseup : () => {}
    };
}

function King(team) {
    this.createPeice = () => {
        let peice = document.createElement("div");
        if(team) {
            peice.className = "black-king";
        }
        else {
            peice.className = "white-king";
        }
        return peice;
    }; 
    ev = {
        mousedown : () => {},
        mousemove : () => {},
        mouseup : () => {}
    };
}

function Chess() {
    this.createChessBoard = settings => {
        const chessboard = document.createElement("table");
        chessboard.className = "chessboard";
        for(var x in settings) {
            var tr = document.createElement("tr");
            chessboard.appendChild(tr);
            for(var y in settings[x]) {
                tr.appendChild(settings[x][y].createBlock());
            }
        }
        return chessboard;
    }
}

