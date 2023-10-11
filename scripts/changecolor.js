function changeColor() {
  var element = document.body;
  element.classList.toggle("light-mode");

  var code = document.getElementsByTagName("code");
  for (var i=0; i<code.length; i++) {
    if (code[i].style.backgroundColor === "black") {
      code[i].style.backgroundColor = 'white';
      code[i].style.color           = 'black';
    }
    else {
      code[i].style.backgroundColor = 'black';
      code[i].style.color           = 'white';
    }
  }

  var links = document.getElementsByTagName("a");
  for(var i=0; i<links.length; i++) {
    if (links[i].style.color === "black" && links[i].id != "ignore") {
      links[i].style.color = "white";
    }
    else if (links[i].id != "ignore") {
      links[i].style.color = "black";
    }
  }

  var imgs = document.getElementsByTagName('img');
  for(var i=0; i<imgs.length; i++) {
    if (!imgs[i].src.includes("white") && imgs[i].id == "logo") {
      imgs[i].src = imgs[i].src.replace('.png', '-white.png');
    }
    else if (imgs[i].id == "logo") {
      imgs[i].src = imgs[i].src.replace('-white', '');
    }
  }
}
