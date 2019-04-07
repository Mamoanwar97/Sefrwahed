// jquery validation
$(function () {

/* validation start */
/* member 1 */




/* hide the error messages intialy */
	$("#error_name").hide();
	$("#error_email").hide();
	$("#error_number").hide();
	$("#error_id").hide();
	$("#error_uni").hide();
	
	var error_team = false;
	var error_fname = false;
	var error_email = false;
	var error_number = false;
	var error_id = false;
	var error_uni = false;
/* when you leaves the field hyro7 ynfz dalh m3ynh hn3rfha t7t */
	$("#form_team").blur(function(){
	check_team();
	});
	$("#form_fname").blur(function(){
	check_fname();
	});
	$("#form_email").blur(function() {
	check_email();
	});
	$("#form_number").blur(function(){
		check_number();
	});
	$("#form_id").blur(function(){
		check_id();
	});
	$("#form_uni").blur(function(){
		check_uni();
	});

	/* bdayt t3reef el functions */

	

	/* frist one for the name which must be only in English letter*/

	function check_fname() {
	  var pattern = /^[A-Za-z -]+$/i;
	  //var pattern = /^[a-zA-Z]$/;
	  var fname = $("#form_fname").val();
	 	if (fname == '') {
	 		 $("#form_fname").css("border-left","2px solid #F90A0A");
	     	error_fname = true;
	 	}
	 	else if (pattern.test(fname)) {
	       $("#error_name").hide();
	       $("#form_fname").css("border-left","0px ");
	    } 
	    else {
	       $("#error_name").html();
	       $("#error_name").show();
	       $("#form_fname").css("border-left","2px solid #F90A0A");
	       error_fname = true;
	    }
	}

	/* email validation function*/
	function check_email() {
	  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  var email = $("#form_email").val();
	 	if ( email == '') {
	 		$("#form_email").css("border-left","2px solid #F90A0A"); //red

	     	error_email = true;
	    }
	    else if(pattern.test(email) ) {
	     $("#error_email").hide();
	     $("#form_email").css("border-left","0px"); //green
	    } 

	    else {
	     $("#error_email").html();
	     $("#error_email").show();
	     $("#form_email").css("border-left","2px solid #F90A0A");
	     error_email = true;
	    }
	}

		/* mobile number validation function 011 010 012 015   */

	function check_number() {
	  var pattern = /^01([0-2]|5){1}[0-9]{8}/;
	  var number = $("#form_number").val();
		if ( number == '') {
	 		$("#form_number").css("border-left","2px solid #F90A0A");

	     	error_email = true;
	    }
	    else if(pattern.test(number) ) {
	     $("#error_number").hide();
	     $("#form_number").css("border-left","0px");
	    } 

	    else {
	     $("#error_number").html();
	     $("#error_number").show();
	     $("#form_number").css("border-left","2px solid #F90A0A");
	     error_email = true;
	    }

	}

	/*check id*/
	function check_id() {
		var id_length = $("#form_id").val().length;
		console.log(id_length);
		if (id_length != 14) {
		$("#form_id").css("border-left","2px solid #F90A0A");
	 		error_id = true;
		}
		else {		var pattern =  /^[0-9]*$/g;
		var id = $("#form_id").val();
		if ( id == '') {
	 		$("#form_id").css("border-left","2px solid #F90A0A");
	 		error_id = true;
	 	}
	 	else if (pattern.test(id)){
	     	$("#form_id").css("border-left","0px");
	     	error_id = false;
	 	}else {
	 		$("#form_id").css("border-left","2px solid #F90A0A");
	 		error_id = true;
	 	}}
		
	}
	/* check if the text is empty*/
	function check_team() {
		//var text_length = $("#form_text").val().length;
		var text = $("#form_team").val();
		if ( text == '') {
	 		$("#form_team").css("border-left","2px solid #F90A0A");
	 		error_team = true;
	 	}
	 	else{
	     	$("#form_team").css("border-left","0px");
	 	}
		
	}
	function check_uni(){
		var pattern = /^[A-Za-z -]+$/i;
	  //var pattern = /^[a-zA-Z]$/;
	  	var funi = $("#form_uni").val();
	 	if (funi == '') {
	 		 $("#form_uni").css("border-left","2px solid #F90A0A");
	     	error_uni = true;
	 	}
	 	else if (pattern.test(funi)) {
	       $("#error_uni").hide();
	       $("#form_uni").css("border-left","0px ");
	    } 
	    else {
	       $("#error_uni").html();
	       $("#error_uni").show();
	       $("#form_uni").css("border-left","2px solid #F90A0A");
	       error_uni = true;
	    }
	}

/*member 2 */

/* hide the error messages intialy */
	$("#error_name2").hide();
	$("#error_email2").hide();
	$("#error_number2").hide();
	$("#error_id2").hide();
	$("#error_uni2").hide();
	
	var error_team2 = false;
	var error_fname2 = false;
	var error_email2 = false;
	var error_number2 = false;
	var error_id2 = false;
	var error_uni2 = false;
/* when you leaves the field hyro7 ynfz dalh m3ynh hn3rfha t7t */
	$("#form_team2").blur(function(){
	check_team2();
	});
	$("#form_fname2").blur(function(){
	check_fname2();
	});
	$("#form_email2").blur(function() {
	check_email2();
	});
	$("#form_number2").blur(function(){
		check_number2();
	});
	$("#form_id2").blur(function(){
		check_id2();
	});
	$("#form_uni2").blur(function(){
		check_uni2();
	});

	/* bdayt t3reef el functions */

	/* frist one for the name which must be only in English letter*/

	function check_uni2(){
		var pattern = /^[A-Za-z -]+$/i;
	  //var pattern = /^[a-zA-Z]$/;
	  	var funi = $("#form_uni2").val();
	 	if (funi == '') {
	 		 $("#form_uni2").css("border-left","2px solid #F90A0A");
	     	error_uni2 = true;
	 	}
	 	else if (pattern.test(funi)) {
	       $("#error_uni2").hide();
	       $("#form_uni2").css("border-left","0px ");
	    } 
	    else {
	       $("#error_uni2").html();
	       $("#error_uni2").show();
	       $("#form_uni2").css("border-left","2px solid #F90A0A");
	       error_uni2 = true;
	    }
	}


	function check_fname2() {
	  var pattern = /^[A-Za-z -]+$/i;
	  var fname = $("#form_fname2").val();
	 	if (fname == '') {
	 		 $("#form_fname2").css("border-left","2px solid #F90A0A");
	     	error_fname2 = true;
	 	}
	 	else if (pattern.test(fname)) {
	       $("#error_name2").hide();
	       $("#form_fname2").css("border-left","0px ");
	    } 
	    else {
	       $("#error_name2").html();
	       $("#error_name2").show();
	       $("#form_fname2").css("border-left","2px solid #F90A0A");
	       error_fname2 = true;
	    }
	}

	/* email validation function*/
	function check_email2() {
	  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  var email = $("#form_email2").val();
	 	if ( email == '') {
	 		$("#form_email2").css("border-left","2px solid #F90A0A"); //red

	     	error_email2 = true;
	    }
	    else if(pattern.test(email) ) {
	     $("#error_email2").hide();
	     $("#form_email2").css("border-left","0px"); //green
	    } 

	    else {
	     $("#error_email2").html();
	     $("#error_email2").show();
	     $("#form_email2").css("border-left","2px solid #F90A0A");
	     error_email2 = true;
	    }
	}

		/* mobile number validation function 011 010 012 015   */

	function check_number2() {
	  var pattern = /^01([0-2]|5){1}[0-9]{8}/;
	  var number = $("#form_number2").val();
		if ( number == '') {
	 		$("#form_number2").css("border-left","2px solid #F90A0A");

	     	error_email2 = true;
	    }
	    else if(pattern.test(number) ) {
	     $("#error_number2").hide();
	     $("#form_number2").css("border-left","0px");
	    } 

	    else {
	     $("#error_number2").html();
	     $("#error_number2").show();
	     $("#form_number2").css("border-left","2px solid #F90A0A");
	     error_email2 = true;
	    }

	}

	/*check id*/
	function check_id2() {
		var id_length = $("#form_id2").val().length;
		console.log(id_length);
		if (id_length != 14) {
		$("#form_id2").css("border-left","2px solid #F90A0A");
	 		error_id2 = true;
		}
		else {		var pattern =  /^[0-9]*$/g;
		var id = $("#form_id2").val();
		if ( id == '') {
	 		$("#form_id2").css("border-left","2px solid #F90A0A");
	 		error_id2 = true;
	 	}
	 	else if (pattern.test(id)){
	     	$("#form_id2").css("border-left","0px");
	     	error_id2 = false;
	 	}else {
	 		$("#form_id2").css("border-left","2px solid #F90A0A");
	 		error_id2 = true;
	 	}}
		
	}




	/* member 3*/









/* hide the error messages intialy */
	$("#error_name3").hide();
	$("#error_email3").hide();
	$("#error_number3").hide();
	$("#error_id3").hide();
	$("#error_uni3").hide();
	
	var error_team3 = false;
	var error_fname3 = false;
	var error_email3 = false;
	var error_number3 = false;
	var error_id3 = false;
	var error_uni3 = false;
/* when you leaves the field hyro7 ynfz dalh m3ynh hn3rfha t7t */
	$("#form_team3").blur(function(){
	check_team3();
	});
	$("#form_fname3").blur(function(){
	check_fname3();
	});
	$("#form_email3").blur(function() {
	check_email3();
	});
	$("#form_number3").blur(function(){
		check_number3();
	});
	$("#form_id3").blur(function(){
		check_id3();
	});
	$("#form_uni3").blur(function(){
		check_uni3();
	});

	/* bdayt t3reef el functions */

	/* frist one for the name which must be only in English letter*/

	function check_fname3() {
	  var pattern = /^[A-Za-z -]+$/i;
	  var fname = $("#form_fname3").val();
	 	if (fname == '') {
	 		 $("#form_fname3").css("border-left","2px solid #F90A0A");
	     	error_fname3 = true;
	 	}
	 	else if (pattern.test(fname)) {
	       $("#error_name3").hide();
	       $("#form_fname3").css("border-left","0px ");
	    } 
	    else {
	       $("#error_name3").html();
	       $("#error_name3").show();
	       $("#form_fname3").css("border-left","2px solid #F90A0A");
	       error_fname3 = true;
	    }
	}
	function check_uni3(){
		var pattern = /^[A-Za-z -]+$/i;
	  //var pattern = /^[a-zA-Z]$/;
	  	var funi = $("#form_uni3").val();
	 	if (funi == '') {
	 		 $("#form_uni3").css("border-left","3px solid #F90A0A");
	     	error_uni3 = true;
	 	}
	 	else if (pattern.test(funi)) {
	       $("#error_uni3").hide();
	       $("#form_uni3").css("border-left","0px ");
	    } 
	    else {
	       $("#error_uni3").html();
	       $("#error_uni3").show();
	       $("#form_uni3").css("border-left","3px solid #F90A0A");
	       error_uni3 = true;
	    }
	}

	/* email validation function*/
	function check_email3() {
	  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  var email = $("#form_email3").val();
	 	if ( email == '') {
	 		$("#form_email3").css("border-left","2px solid #F90A0A"); //red

	     	error_email3 = true;
	    }
	    else if(pattern.test(email) ) {
	     $("#error_email3").hide();
	     $("#form_email3").css("border-left","0px"); //green
	    } 

	    else {
	     $("#error_email3").html();
	     $("#error_email3").show();
	     $("#form_email3").css("border-left","2px solid #F90A0A");
	     error_email3 = true;
	    }
	}

		/* mobile number validation function 011 010 012 015   */

	function check_number3() {
	  var pattern = /^01([0-2]|5){1}[0-9]{8}/;
	  var number = $("#form_number3").val();
		if ( number == '') {
	 		$("#form_number3").css("border-left","2px solid #F90A0A");

	     	error_email3= true;
	    }
	    else if(pattern.test(number) ) {
	     $("#error_number3").hide();
	     $("#form_number3").css("border-left","0px");
	    } 

	    else {
	     $("#error_number3").html();
	     $("#error_number3").show();
	     $("#form_number3").css("border-left","2px solid #F90A0A");
	     error_email3 = true;
	    }

	}

	/*check id*/
	function check_id3() {
		var id_length = $("#form_id3").val().length;
		console.log(id_length);
		if (id_length != 14) {
		$("#form_id3").css("border-left","2px solid #F90A0A");
	 		error_id3 = true;
		}
		else {		var pattern =  /^[0-9]*$/g;
		var id = $("#form_id3").val();
		if ( id == '') {
	 		$("#form_id3").css("border-left","2px solid #F90A0A");
	 		error_id3 = true;
	 	}
	 	else if (pattern.test(id)){
	     	$("#form_id3").css("border-left","0px");
	     	error_id3 = false;
	 	}else {
	 		$("#form_id3").css("border-left","2px solid #F90A0A");
	 		error_id3 = true;
	 	}}
		
	}


/*member four*/
		var i = "true";

$('#add_member').click( function() {
		 $("#4mem").html();
	     $("#4mem").show();
	     $('#add_member').hide();
	     $('#add_member5').show();
	     i = "false";
	      runvalidation4();
} );
	$("#error_name4").hide();
	$("#error_email4").hide();
	$("#error_number4").hide();
	$("#error_id4").hide();

	$("#error_uni4").hide();
	
	var error_team4 = false;
	var error_fname4 = false;
	var error_email4 = false;
	var error_number4 = false;
	var error_id4 = false;
	var error_uni4 = false;

function runvalidation4() {

/* hide the error messages intialy */

/* when you leaves the field hyro7 ynfz dalh m3ynh hn3rfha t7t */
	$("#form_team4").blur(function(){
	check_team4();
	});
	$("#form_fname4").blur(function(){
	check_fname4();
	});
	$("#form_email4").blur(function() {
	check_email4();
	});
	$("#form_number4").blur(function(){
		check_number4();
	});
	$("#form_id4").blur(function(){
		check_id4();
	});
	$("#form_uni4").blur(function(){
		check_uni4();
	});

	/* bdayt t3reef el functions */

	/* frist one for the name which must be only in English letter*/



}
	function check_fname4() {
	  var pattern = /^[A-Za-z -]+$/i;
	  var fname = $("#form_fname4").val();
	  if (i == "false") {
	 	if (fname == '') {
	 		 $("#form_fname4").css("border-left","2px solid #F90A0A");
	     	error_fname4 = true;
	 	}
	 	else if (pattern.test(fname)) {
	       $("#error_name4").hide();
	       $("#form_fname4").css("border-left","0px ");
	    } 
	    else {
	       $("#error_name4").html();
	       $("#error_name4").show();
	       $("#form_fname4").css("border-left","2px solid #F90A0A");
	       error_fname4 = true;
	    }}
	}

	function check_uni4(){
		var pattern = /^[A-Za-z -]+$/i;
	  //var pattern = /^[a-zA-Z]$/;
	  	var funi = $("#form_uni4").val();
	  	if(i=="false"){
	 	if (funi == '') {
	 		 $("#form_uni4").css("border-left","4px solid #F90A0A");
	     	error_uni4 = true;
	 	}
	 	else if (pattern.test(funi)) {
	       $("#error_uni4").hide();
	       $("#form_uni4").css("border-left","0px ");
	    } 
	    else {
	       $("#error_uni4").html();
	       $("#error_uni4").show();
	       $("#form_uni4").css("border-left","4px solid #F90A0A");
	       error_uni4 = true;
	    }
	}
	}
	/* email validation function*/
	function check_email4() {
	  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  var email = $("#form_email4").val();
	  if (i == "false") {
	 	if ( email == '') {
	 		$("#form_email4").css("border-left","2px solid #F90A0A"); //red

	     	error_email4 = true;
	    }
	    else if(pattern.test(email) ) {
	     $("#error_email4").hide();
	     $("#form_email4").css("border-left","0px"); //green
	    } 

	    else {
	     $("#error_email4").html();
	     $("#error_email4").show();
	     $("#form_email4").css("border-left","2px solid #F90A0A");
	     error_email4 = true;
	    }
	}}

		/* mobile number validation function 011 010 012 015   */

	function check_number4() {
	  var pattern = /^01([0-2]|5){1}[0-9]{8}/;
	  var number = $("#form_number4").val();
	  if (i == "false") {
		if ( number == '') {
	 		$("#form_number4").css("border-left","2px solid #F90A0A");

	     	error_email4= true;
	    }
	    else if(pattern.test(number) ) {
	     $("#error_number4").hide();
	     $("#form_number4").css("border-left","0px");
	    } 

	    else {
	     $("#error_number4").html();
	     $("#error_number4").show();
	     $("#form_number4").css("border-left","2px solid #F90A0A");
	     error_email4 = true;
	    }

	}}

	/*check id*/
	function check_id4() {
		var id_length = $("#form_id4").val().length;
		console.log(id_length);
		if (i == "false") {
		if (id_length != 14) {
		$("#form_id4").css("border-left","2px solid #F90A0A");
	 		error_id4 = true;
		}
		else {		var pattern =  /^[0-9]*$/g;
		var id = $("#form_id4").val();
		if ( id == '') {
	 		$("#form_id4").css("border-left","2px solid #F90A0A");
	 		error_id4 = true;
	 	}
	 	else if (pattern.test(id)){
	     	$("#form_id4").css("border-left","0px");
	     	error_id4 = false;
	 	}else {
	 		$("#form_id4").css("border-left","2px solid #F90A0A");
	 		error_id4 = true;
	 	}}
		
	}}

/*member 5*/
var j = "true";
$('#add_member5').click( function() {
		 $("#5mem").html();
	     $("#5mem").show();
	     $('#add_member5').hide();
	     j = "false"
	     runvalidation5();
} );
	$("#error_name5").hide();
	$("#error_email5").hide();
	$("#error_number5").hide();
	$("#error_id5").hide();
	$("#error_uni5").hide();
	
	var error_team5 = false;
	var error_fname5 = false;
	var error_email5 = false;
	var error_number5 = false;
	var error_id5 = false;
	var error_uni5 = false;

function runvalidation5() {

/* hide the error messages intialy */

/* when you leaves the field hyro7 ynfz dalh m3ynh hn3rfha t7t */
	$("#form_team5").blur(function(){
	check_team5();
	});
	$("#form_fname5").blur(function(){
	check_fname5();
	});
	$("#form_email5").blur(function() {
	check_email5();
	});
	$("#form_number5").blur(function(){
		check_number5();
	});
	$("#form_id5").blur(function(){
		check_id5();
	});
	$("#form_uni5").blur(function(){
		check_uni5();
	});

	/* bdayt t3reef el functions */

	/* frist one for the name which must be only in English letter*/



}
	function check_fname5() {
	  var pattern = /^[A-Za-z -]+$/i;
	  var fname = $("#form_fname5").val();
	  if (j == "false") {
	 	if (fname == '') {
	 		 $("#form_fname5").css("border-left","2px solid #F90A0A");
	     	error_fname5 = true;
	 	}
	 	else if (pattern.test(fname)) {
	       $("#error_name5").hide();
	       $("#form_fname5").css("border-left","0px ");
	    } 
	    else {
	       $("#error_name5").html();
	       $("#error_name5").show();
	       $("#form_fname5").css("border-left","2px solid #F90A0A");
	       error_fname5 = true;
	    }}
	}

	function check_uni5(){
		var pattern = /^[A-Za-z -]+$/i;
	  //var pattern = /^[a-zA-Z]$/;
	  	var funi = $("#form_uni5").val();
	  	if(j=="false"){
	 	if (funi == '') {
	 		 $("#form_uni5").css("border-left","5px solid #F90A0A");
	     	error_uni5 = true;
	 	}
	 	else if (pattern.test(funi)) {
	       $("#error_uni5").hide();
	       $("#form_uni5").css("border-left","0px ");
	    } 
	    else {
	       $("#error_uni5").html();
	       $("#error_uni5").show();
	       $("#form_uni5").css("border-left","5px solid #F90A0A");
	       error_uni5 = true;
	    }
	}
	}

	/* email validation function*/
	function check_email5() {
	  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  var email = $("#form_email5").val();
	  if (j == "false") {
	 	if ( email == '') {
	 		$("#form_email5").css("border-left","2px solid #F90A0A"); //red

	     	error_email5 = true;
	    }
	    else if(pattern.test(email) ) {
	     $("#error_email5").hide();
	     $("#form_email5").css("border-left","0px"); //green
	    } 

	    else {
	     $("#error_email5").html();
	     $("#error_email5").show();
	     $("#form_email5").css("border-left","2px solid #F90A0A");
	     error_email5 = true;
	    }
	}}

		/* mobile number validation function 011 010 012 015   */

	function check_number5() {
	  var pattern = /^01([0-2]|5){1}[0-9]{8}/;
	  var number = $("#form_number5").val();
	  if (j == "false") {
		if ( number == '') {
	 		$("#form_number5").css("border-left","2px solid #F90A0A");

	     	error_email5= true;
	    }
	    else if(pattern.test(number) ) {
	     $("#error_number5").hide();
	     $("#form_number5").css("border-left","0px");
	    } 

	    else {
	     $("#error_number5").html();
	     $("#error_number5").show();
	     $("#form_number5").css("border-left","2px solid #F90A0A");
	     error_email5 = true;
	    }

	}}

	/*check id*/
	function check_id5() {
		var id_length = $("#form_id5").val().length;
		console.log(id_length);
		if (j == "false") {
		if (id_length != 14) {
		$("#form_id5").css("border-left","2px solid #F90A0A");
	 		error_id5 = true;
		}
		else {		var pattern =  /^[0-9]*$/g;
		var id = $("#form_id5").val();
		if ( id == '') {
	 		$("#form_id5").css("border-left","2px solid #F90A0A");
	 		error_id5 = true;
	 	}
	 	else if (pattern.test(id)){
	     	$("#form_id5").css("border-left","0px");
	     	error_id5 = false;
	 	}else {
	 		$("#form_id5").css("border-left","2px solid #F90A0A");
	 		error_id5 = true;
	 	}}
		
	}}

	function check_idsofall() {
	  var id1 = $("#form_id").val();
	  var id2 = $("#form_id2").val();
	  var id3 = $("#form_id3").val();
	  var id4 = $("#form_id4").val();
	  var id5 = $("#form_id5").val();
	  if(id5 == ""){
	  	if(id4 == ""){
	  		if(id1 == id2 || id2 == id3 || id1 == id3)
	  			return false
	  		else
	  			return true
	  	}
	  	else{
	  		if(id1 == id2 || id1 == id3 || id1 == id4 || id2 == id3 || id2 == id4 || id3 == id4)
	  			return false
	  		else
	  			return true
	  	}
	  }
	  else{
	  	if(id1 == id2 || id1 == id3 || id1 == id4 || id1 == id5 || id2 == id3 || id2 == id4 || id2 == id5 || id3 == id4 || id3 == id4 || id4 == id5)
	  			return false
	  		else
	  			return true
	  }
	}

	function check_ifalreadyregistered(id){
		var x;
		$.ajax({

		     url : 'datachecker.php',
		     type : 'POST',
		     async: false,
		     crossDomain: true,
		     data:{
		     		'id' : id
		     },
		     success : function (result) {
		        if(result == "taken"){
		        	//alert('taken')
		        	x = true
		        }
		        else
		        {
		        	//alert('not taken')
		        	x = false
		        }
		     },
		     error: function(ts) { alert(ts.responseText) }

   		});
   		return x;
	}

	function check_ifallalreadyregistered(){
		var id1 = $("#form_id").val();
		var id2 = $("#form_id2").val();
		var id3 = $("#form_id3").val();
		var id4 = $("#form_id4").val();
		var id5 = $("#form_id5").val();
		if(check_ifalreadyregistered(id1))
			return 1;
		else if(check_ifalreadyregistered(id2))
			return 2;
		else if(check_ifalreadyregistered(id3))
			return 3;
		else if(check_ifalreadyregistered(id4) && id4 != '')
			return 4;
		else if(check_ifalreadyregistered(id5) && id5 != '')
			return 5;
		else
			return 0
	}

	

	/* check if the text is empty*/


	/* lw b3t we hwa 3aml 7aga 3'lt */
	$("#myForm").submit(function() {
	  error_fname = false;
	  error_email = false;
	  error_number = false;
	  error_team = false;
	  error_id = false;
	  error_uni = false;
	  check_number();
	  check_fname();
	  check_email();
	  check_team();
	  check_id();
	  check_uni();
	  error_fname2 = false;
	  error_email2 = false;
	  error_number2 = false;
	  error_id2 = false;
	  error_uni2 = false;
	  check_number2();
	  check_fname2();
	  check_email2();
	  check_id2();
	  check_uni2();
	  error_fname3 = false;
	  error_email3 = false;
	  error_number3 = false;
	  error_id3 = false;
	  error_uni3 = false;
	  check_number3();
	  check_fname3();
	  check_email3();
	  check_id3();
	  check_uni3();
 	  error_fname4 = false;
	  error_email4 = false;
	  error_number4 = false;
	  error_id4 = false;

	  error_uni4 = false;
	  check_number4();
	  check_fname4();
	  check_email4();
	  check_id4();
	  check_uni4();

	  error_fname5 = false;
	  error_email5 = false;
	  error_number5 = false;
	 error_id5 = false;

	  error_uni5 = false;
	  check_number5();
	  check_fname5();
	  check_email5();
	  check_id5();
	  check_uni5();
	  var idtest = check_idsofall();
	  var alreadyregisteredtest = check_ifallalreadyregistered();
	 //var alreadyregisteredtest = 0;  
	if (error_fname === false && error_email === false && error_number === false  && error_team === false && error_id === false && 
	  	error_fname2 === false && error_email2 === false && error_number2 === false  && error_id2 === false && 
	  	error_fname3 === false && error_email3 === false && error_number3 === false  && error_id3 === false &&
	  	 error_fname4 === false && error_email4 === false && error_number4 === false  && error_id4 === false && 
	  	 error_fname5 === false && error_email5 === false && error_number5 === false  && error_id5 === false &&
	  	 error_uni == false && error_uni2 == false && error_uni3 == false && error_uni4 == false && error_uni5 == false) {
	    if(idtest){
	    	//alert(alreadyregisteredtest)
	    	if(alreadyregisteredtest == 0){
		    	alert("Sent Successfull , We will contact you back soon");
		    	return true;
	    	}
	    	else{
	    		alert("ID of crew member number " + alreadyregisteredtest + " has been previously registered");
	    		return false;
	    	}
	    }
	    else{
	    	alert("Duplicate IDs entered in multiple members. Please Fill the form Correctly")
	    	return false;
	    }
	    
	   } else {
	    alert("Please Fill the form Correctly");
	    return false;
	  }
	});
		


});	
