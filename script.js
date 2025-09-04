const docBody = document.querySelectorAll('li')
docBody.forEach((li) => {
  const paths = li.querySelectorAll('path');

  // Store the original fill for each path
  paths.forEach((path) => {
    path.dataset.originalFill = path.getAttribute('fill') || ''; 
  });  


  li.addEventListener('mouseenter', (event) => {
    const list = event.currentTarget
    if(list instanceof HTMLLIElement) {
        
            paths[0].style.fill = 'white';
    paths[1].style.fill = 'white';
    paths[2].style.fill = 'black';
    paths[3].style.fill = 'black';
        
    }  
    })
    
  li.addEventListener('mouseleave', (event) => {
    const list = event.currentTarget
    
    if(list instanceof HTMLLIElement) {
    
            paths.forEach((path) => {
      const original = path.dataset.originalFill;
      path.style.fill = original || '';
    });
       
    }  
    })   
})

//children[0].children[0 & 1].style.fill = outside [2& 3] = inside