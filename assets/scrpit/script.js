var firstsec = document.getElementById('home');
var secondsec = document.getElementById('about');
document.onscroll = function scroll() {
  secondsec.scrollIntoView({behavior: "smooth"});
 }
 const body = document.body,
                scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
                height = scrollWrap.getBoundingClientRect().height - 1,
                speed = 0.04;

            var offset = 0;

            body.style.height = Math.floor(height) + "px";

            function smoothScroll() {
                offset += (window.pageYOffset - offset) * speed;

                var scroll = "translateY(-" + offset + "px) translateZ(0)";
                scrollWrap.style.transform = scroll;

                callScroll = requestAnimationFrame(smoothScroll);
            }

smoothScroll();
var pic1= document.getElementById('pic1');
var pic2= document.getElementById('pic2');
var datas= document.getElementById('datas');

pic1.style.display="none";
pic2.style.display="none";


datas.onmouseenter=function(){
  pic1.style.display="block";
  pic2.style.display="block";
}
datas.onmouseleave=function(){
  pic1.style.display="none";
  pic2.style.display="none";
}

 
