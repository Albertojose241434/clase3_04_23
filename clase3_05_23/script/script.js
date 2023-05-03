let incrementar = 0;

let show = document.querySelector('.show')
let cuerpo = document.querySelector('.container')

document.addEventListener('click',(e)=>{
    console.log(e)

    if(e.target.matches('#decrease')){
        incrementar--
        show.innerHTML = incrementar
        cuerpo.style.backgroundColor = 'rbg (255, 15, 0)'
        
    } 
    else if (e.target.matches('#increase')){
        incrementar++
        show.innerHTML = incrementar
        cuerpo.style.backgroundColor = 'rbg (81, 255, 0 )'
        
    }   else if (e.target.matches('#reset')){
        incrementar = 0
        show.innerHTML = incrementar
        cuerpo.style.backgroundColor = 'rbg (93, 0, 255 )'
        
    }       
 } 
)    
  
        
   
 


