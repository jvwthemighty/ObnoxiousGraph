fuckyou=document.querySelector('#fuckyou');
btn=document.querySelector('button')

currentImage=-1;
console.log(btn)

var ImageArray=['no.svg','really.svg','fuckyou.svg','notgonnabother.svg','goaway.svg'];

btn.onclick=function(){
  if(currentImage == -1)
  {
    fuckyou.style.visibility='visible'
  }else if (currentImage == 3) {
    setInterval(function(){window.location.href =
    'https://media.makeameme.org/created/web-development-spiders.jpg'},2000)
  }
  currentImage+=1;
  if(currentImage<5){
  fuckyou.src=ImageArray[currentImage];
}
}
