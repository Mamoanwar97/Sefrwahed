// jquery validation
$(function () {
		/* uncomment 34an t5ly tfkeer eluser be rsala m4 highkighted red */
		/*$('[required]').blur(function () {

		if ($(this).val() == '') {
			console.log("good")
			$(this).next('span').fadeIn().delay(3000).fadeOut();
		}

	});*/
/* validation start */

/* hide the error messages intialy */
	$("#error_name").hide();
	$("#error_email").hide();
	$("#error_number").hide();
	$("#error_text").hide();

	var error_fname = false;
	var error_email = false;
	var error_number = false;
	var error_text = false;
/* when you leaves the field hyro7 ynfz dalh m3ynh hn3rfha t7t */
	$("#form_fname").blur(function(){
	check_fname();
	});
	$("#form_email").blur(function() {
	check_email();
	});
	$("#form_number").blur(function(){
		check_number();
	});
	$("#form_text").blur(function(){
		check_text();
	});

	/* bdayt t3reef el functions */

	/* frist one for the name which must be only in English letter*/

	function check_fname() {
	  var pattern = /^[a-zA-Z]*$/;
	  var fname = $("#form_fname").val();
	 	if (fname == '') {
	 		 $("#form_fname").css("border-bottom","2px solid #F90A0A");
	     	error_fname = true;
	 	}
	 	else if (pattern.test(fname)) {
	       $("#error_name").hide();
	       $("#form_fname").css("border-bottom","2px solid #34F458");
	    } 
	    else {
	       $("#error_name").html();
	       $("#error_name").show();
	       $("#form_fname").css("border-bottom","2px solid #F90A0A");
	       error_fname = true;
	    }
	}

	/* email validation function*/
	function check_email() {
	  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  var email = $("#form_email").val();
	 	if ( email == '') {
	 		$("#form_email").css("border-bottom","2px solid #F90A0A"); //red

	     	error_email = true;
	    }
	    else if(pattern.test(email) ) {
	     $("#error_email").hide();
	     $("#form_email").css("border-bottom","2px solid #34F458"); //green
	    } 

	    else {
	     $("#error_email").html();
	     $("#error_email").show();
	     $("#form_email").css("border-bottom","2px solid #F90A0A");
	     error_email = true;
	    }
	}

		/* mobile number validation function 011 010 012 015   */

	function check_number() {
	  var pattern = /^01([0-2]|5){1}[0-9]{8}/;
	  var number = $("#form_number").val();
		if ( number == '') {
	 		$("#form_number").css("border-bottom","2px solid #F90A0A");

	     	error_email = true;
	    }
	    else if(pattern.test(number) ) {
	     $("#error_number").hide();
	     $("#form_number").css("border-bottom","2px solid #34F458");
	    } 

	    else {
	     $("#error_number").html();
	     $("#error_number").show();
	     $("#form_number").css("border-bottom","2px solid #F90A0A");
	     error_email = true;
	    }

	}	
	/* check if the text is empty*/
	function check_text() {
		//var text_length = $("#form_text").val().length;
		var text = $("#form_text").val();
		if ( text == '') {
	 		$("#form_text").css("border-bottom","2px solid #F90A0A");
	 		error_text = true;
	 	}
	 	else{
	 		$("#error_text").hide();
	     	$("#form_text").css("border-bottom","2px solid #34F458");
	 	}
		
	}

	/* lw b3t we hwa 3aml 7aga 3'lt */
	$("#myForm").submit(function() {
	  error_fname = false;
	  error_email = false;
	  error_number = false;
	  error_text = false;

	  check_number();
	  check_fname();
	  check_email();
	  check_text();
	  if (error_fname === false && error_email === false && error_number === false  && error_text === false ) {
	    alert("Sent Successfull , We will contact you back soon");
	    return true;
	   } else {
	    alert("Please Fill the form Correctly");
	    return false;
	  }
	});
		


});	
