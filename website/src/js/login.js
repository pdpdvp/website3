function submit(){
	var first,last;
	first =  document.getElementById('Username');
	last = document.getElementById('Password');
	console.log(first ,last);
	span = document.getElementsByTagName('span');
	if(first.value === ''|| last.value ===''){
		
        for(i=0;i<span.length;i++){
        	if(span[i].previousElementSibling.value === ''){
        		span[i].innerHTML = 'please enter '+span[i].previousElementSibling.name;
		        span[i].style.color = 'red';
		      
        	}
        	
        }
		
	}
	else {

      location.assign("http://localhost/website/src/partials/afterLoginForm.html");
     

	}
}


