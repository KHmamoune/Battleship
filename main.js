(()=>{var e={368:e=>{class t{constructor(e){this.length=e,this.hits=0,this.sunk=!1}hit(){this.hits+=1,this.isSunk()}isSunk(){this.hits>=this.length&&(this.sunk=!0)}}e.exports={Ship:t,Gameboard:class{constructor(){this.ships=[],this.board=new Array(10);for(let e=0;e<10;e++)this.board[e]=new Array(10).fill("empty")}placeShip(e,s){let i=new t(e);for(let e=0;e<i.length;e++)this.board[s[0]][s[1]+e]=this.ships.length;this.ships.push(i)}recieveAttack(e){let t=this.board[e[0]][e[1]];"empty"!=t?(this.ships[t].hit(),this.board[e[0]][e[1]]="hit",this.shipsSunk()&&console.log("all ships are sunk")):this.board[e[0]][e[1]]="miss"}shipsSunk(){for(let e=0;e<this.ships.length;e++)if(!this.ships[e].sunk)return!1;return!0}isMoveLegal(e){return!(e[0]>9||e[1]>9)&&"hit"!=this.board[e[0]][e[1]]&&"miss"!=this.board[e[0]][e[1]]}createBoard(e,t){for(let s=0;s<10;s++)for(let i=0;i<10;i++){const a=document.createElement("div");a.classList.add("cell"),"oponent"==t?("hit"==this.board[s][i]?a.classList.add("hit"):"miss"==this.board[s][i]?a.classList.add("miss"):a.classList.add("oponent"),e.appendChild(a)):("empty"==this.board[s][i]?a.classList.add("empty"):"hit"==this.board[s][i]?a.classList.add("hit"):"miss"==this.board[s][i]?a.classList.add("miss"):a.classList.add("ship"),e.appendChild(a))}}},Player:class{constructor(e){this.name=e}attack(e,t){e.recieveAttack(t)}}}}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}(()=>{const e=s(368),t=document.querySelector(".b1"),i=document.querySelector(".b2"),a=document.querySelector(".x"),r=document.querySelector(".y"),o=document.querySelector(".btn");let h=0,l=[10,10],n=new e.Player("pl"),c=new e.Player("com"),d=new e.Gameboard,p=new e.Gameboard;function u(){document.querySelectorAll(".cell").forEach((e=>e.remove())),d.createBoard(t,"player"),p.createBoard(i,"oponent"),d.shipsSunk()&&(console.log(c.name+" is the winner"),h=2,o.disabled=!0),p.shipsSunk()&&(console.log(n.name+" is the winner"),h=2,o.disabled=!0)}d.placeShip(3,[6,5]),d.placeShip(2,[2,2]),d.placeShip(4,[8,4]),p.placeShip(3,[6,5]),p.placeShip(2,[2,2]),p.placeShip(4,[8,4]),d.createBoard(t,"player"),p.createBoard(i,"oponent"),o.addEventListener("click",(()=>{if(l[0]=a.value,l[1]=r.value,p.isMoveLegal(l)&&(n.attack(p,l),h=1),u(),1==h){for(l=[10,10];!d.isMoveLegal(l);)l[0]=Math.floor(10*Math.random()),l[1]=Math.floor(10*Math.random());c.attack(d,l),h=0}u()}))})()})();