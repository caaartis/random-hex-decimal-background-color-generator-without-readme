const btn=document.querySelector('.btn-click');

btn.addEventListener('click',function(){
    const randoColor=Math.floor(Math.random()*16777220).toString(16);
    document.body.style.backgroundColor='#'+randoColor;
    document.getElementById('hex-code').innerHTML="#"+randoColor;
})