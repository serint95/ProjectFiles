 function assign_value() {
	if(flag[count] == false && flag2[count] === false ){
		if (count <= 3){
			var abc =  $('input[name="ans"]:checked').val();
			var xyz = questions[count].options[abc];
			user_choice.splice(count, 1,xyz);
	
	  
	}
	else if(count > 3){
		  
		  user_choice.splice(count, 1,$('input[name="ans"]').val().toLowerCase());
	}
	}
	
	
  }
 
 function cal() {
	var numb = 0;
    var marks = $('<p>',{id: 'question'});
    
    
    for (var i = 0; i < user_choice.length; i++) {
	
      if (user_choice[i] == questions[i].answer) {
		
        numb++;
      }
    }
    if (numb < 4){
		marks.append('Great, You got ' + ((numb/questions.length)*100) + ' percent marks but you could have done better');
	}else if (numb >= 4){
		marks.append('congrats you got ' + ((numb/questions.length)*100) + ' percent marks');
	}
    return marks;
  }
 

  
  
  
  
 
	
  
  
  
  
  function createQuest() {
    gk.slideToggle(function() {
      
		$('#question').remove();
      
		if(count < (questions.length-1)){
			var concat = $('<div>', {
				id: 'question'
			});
			
			var head = $('<h2> General knowledge Question no ' + (count + 1) + ' :</h2>');
			concat.append(head);
    
			var para = $('<p>').append(questions[count].question);
			concat.append(para);
    
			if(count <= 3 ){
				var mcq = $('<ul >');
				var k;
				var x = '';
	
				for (var i = 0; i < questions[count].options.length; i++) {
					k = $('<li>');
	  
					if (flag[count] == true ){
		 
						x = '<input type="radio" disabled = true  name="ans" style = "vertical-align: baseline;"  value=' + i + ' />';
					}else if(flag[count] == false ){
		  
						x = '<input type="radio"  name="ans"   class = "rad" style = "vertical-align: baseline;" value=' + i + ' />'; 
					}		  
					x += questions[count].options[i];
					k.append(x);
					mcq.append(k);
	  
					}
					concat.append(mcq);
	
				}
				else if (count > 3 || count < 7){
					var input = document.createElement("input");
					input.type = "text";
					input.name = "ans";
					input.autocomplete="off";
					if(flag[count] == true){
						input.disabled = true;
					}else{
						input.disabled = false;
					}
					concat.append(input); 
	  
				}
 
  
			$('#next').show();
			gk.append(concat).slideDown("slow");
        
			if(count === 1){
				$('#prev').show();
				$('#submit').show();
				$('#show_answer').show();
		  
			}else if(count === 0){
				$('#submit').hide();
				$('#show_answer').show();
				$('#prev').hide();
				
				$('#restart').hide();
			
			
        }
		
        }else if (count == (questions.length -1)){
			var concat = $('<div>', {
			id: 'question'
			});
    
			var head = $('<h2> General knowledge Question no ' + (count + 1) + ' :</h2>');
			concat.append(head);
    
			var para = $('<p>').append(questions[count].question);
			concat.append(para);
    
		if(count <= 3 ){
			var mcq = $('<ul >');
	
			var k;
			var x = '';
	
			for (var i = 0; i < questions[count].options.length; i++) {
			k = $('<li>');
	  
			if (flag[count] == true ){
			
				x = '<input type="radio" disabled = true  name="ans" style = "vertical-align: baseline;"  value=' + i + ' />';
			}else if(flag[count] == false ){
		  
				x = '<input type="radio"  name="ans"   class = "rad" style = "vertical-align: baseline;" value=' + i + ' />'; 
			}		  
			x += questions[count].options[i];
			k.append(x);
			mcq.append(k);
	  
			}
			concat.append(mcq);
	
		}
		else if (count > 3 || count < 7){
			var input = document.createElement("input");
			input.type = "text";
			input.name = "ans";
			input.autocomplete="off";
			if(flag[count] == true){
				input.disabled = true;
			}else{
				input.disabled = false;
			}
			concat.append(input); 
	  
		}
 
  
    
			gk.append(concat).slideDown("slow");
			$('#next').hide();
			$('#submit').show();
      }
    });
  }
