// Change Theme
function setTheme(theme) {
    document.documentElement.style.setProperty("--primary-color", theme);
    localStorage.setItem("movie-theme", theme);
  }
var cond = true;

  function setDark(){
    console.log(cond)
    if(cond){
      document.documentElement.style.setProperty("--dark-color", '070707e3');
      document.documentElement.style.setProperty("--dark1-color", 'white');
      cond= false;
    }else{
      document.documentElement.style.setProperty("--dark-color", 'white');
      document.documentElement.style.setProperty("--dark1-color", 'balck');
      cond= true;
    }
  }
  setTheme(localStorage.getItem("movie-theme") || chathams_blue);



let a = '  Search for products here...';

  
    let i = 0;
    let b = '';
  function start () {    
   const fr = setInterval(() => {
      if(i<a.length){
        b += a[i];
        document.getElementById('abc').placeholder = b+"_";
        
      }else{
        clearInterval(fr)
        let c=0;
        const timer = setInterval(() => {
          if(c%2 === 0){
            document.getElementById('abc').placeholder = "  Search for products here..._";
           
          }else if(c === 15){
            clearInterval(timer)
            setTimeout( start, 120 );
          }
          else{
            document.getElementById('abc').placeholder = "  Search for products here... ";
          }
          c++;
        }, 180);
        
        i=-1;
        b = '';
      }
      i++;
    }, 120);
    
  }
  setTimeout(start, 2000);
    
 