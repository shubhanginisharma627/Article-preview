let btn = document.querySelector('.shown');
let x =document.querySelector('#tn');
let y=document.querySelector('.md');
btn.addEventListener('click',()=>{
    if(x.style.display==='none'){
        x.style.display='block';
        y.style.display='none';
       
    }
    else{
       x.style.display='none'
       y.style.display='block';
      
    }
});
