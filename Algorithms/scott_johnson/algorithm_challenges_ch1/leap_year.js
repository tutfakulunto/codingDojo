year = window.prompt("Input a Year : ");  
yr = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);  
alert(yr);