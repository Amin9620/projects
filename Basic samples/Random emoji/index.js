const emoji=document.querySelector(".emoji");
const emojies=
["😀",
"😁",
"😂",
"🤣",
"😃",
"😄",
"😅",
"😆",
"😉",
"😊",
"😋",
"😎",
"😍",
"😘",
"🥰",
"😗",
"😙",
"😚",
"☺",
"🙂",
"🤩",
"🤗",
"😛"];

emoji.addEventListener("mouseover" , function(){
  emoji.innerHTML=emojies[Math.floor(Math.random() * emojies.length)]
});

