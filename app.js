 //selector
 const output = document.querySelector('.output');
  const result = document.querySelector('.result');
  const butt = document.querySelectorAll('button');
  
  //addeventlistner
  butt.forEach(but=>{
      but.addEventListener("click",calculate); 
  });

  function calculate(){
      let buttonText = this.innerText;
      if(buttonText==='AC'){
          output.innerText = "";
          result.innerText = "00";
          result.style.animation = ''
          output.style.animation = ''
        return;
      }
      if(buttonText==='Del'){
          output.textContent = output.textContent.substr(0, output.textContent.length- 1 );
          return;
      }
      if(buttonText==='='){
          result.innerText = eval(output.innerText);
          result.style.animation = 'big 0.5s ease-in-out'
          output.style.animation = 'small 0.5s ease-in-out'
          result.style.animationFillMode = 'forwards'
          output.style.animationFillMode = 'forwards'
      }
      else{
          output.textContent += buttonText;
        return;
      }

  }  