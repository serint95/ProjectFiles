
  
  var flag = [false,false,false,false,false,false];
  var flag2 = [false,false,false,false,false,false];
  var count = 0; 
  var user_choice = []; 
  var gk = $('#gk'); 
  
 
  
  
  
  createQuest();
  
 
  $('#next').on('click', function () {
    assign_value();
    
    
    if (user_choice[count] == undefined) {
      alert('you need to choose an option');
	  
    } else {
	  flag2[count] = false;
      count++;
      createQuest();
    }
	
  });
  
  
  $('#prev').on('click', function () {
    
    
    
    assign_value();
    count--;
	
	
    createQuest();

  });
  
  $('#show_answer').on('click', function () {
	  
	
    assign_value();
	
	if (user_choice[count] == undefined) {
      alert('you need to choose an option');
    } else {
	   
	  
	  $(":text").attr("disabled", true);
	  $(".rad").attr("disabled", true);
      flag[count] = true;
	  alert("Correct answer is : " + questions[count].answer);
	  
	  
	  
    }
    
  });
  
    $('#review').on('click', function () {
	  
	
    user_choice.splice(count, 1,"abc");
	flag2[count] = true;
    
  });
  
  $('#submit').on('click', function () {
    
	
    assign_value();
    
    
    if (user_choice[count] == undefined) {
      alert('you need to choose an option');
	  
    } else {
		
		$('#question').remove();
		count++;
        var marksElem = cal();
		gk.append(marksElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
		$('#submit').hide();
		$('#review').hide();
        $('#show_answer').hide();
		$('#restart').show()
    }
	
   
  });
  
  
  $('#restart').on('click', function (e) {
   
    
    window.location.reload();
  
  });
 
  
  
  
  
 

