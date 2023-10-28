let changecolor = () => {

   let a =  document.getElementById ("switch").
    innerHTML;
    console.log(a);
    if(a == '<i class="fa-solid fa-toggle-off"></i>'){
          document.documentElement.style.setProperty('--darkcolor', '#e2e2e2');
    document.documentElement.style.setProperty('--darkcolor', '#000000');

document. getElementById("switch").
innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
    }
    else{
        document.documentElement.style.setProperty('--darkcolor', '#e2e2e2');
        document.documentElement.style.setProperty('--darkcolor', '#000000');
    
    document. getElementById("switch").
    innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
    }

  



}