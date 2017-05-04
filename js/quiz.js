var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
    [ "What was the first automobile?", "Ford Model T", "Benz Motor Car", "Austin 7", "Buick Model 10", "B" ],
	[ "What does hybrid mean in a car?", "Driven by a diesel engine.", "Driven by a petrol engine.", "Driven by an electric motor.", "Driven by both petrol engine and electric motor.", "D" ],
	[ "What is the purpose of an alternator?", "To start the car.", "To improve fuel economy.", "To charge the car.", "To adjust power output.", "C" ],
	[ "Which type of engines use a spark plug?", "Diesel Engines.", "Petrol Engines.", "Electric Motors.", "Steam Engines.", "B" ],
	[ "Which cars are the best to use in off-road conditions?", "Front Wheel Drive.", "Rear Wheel Drive.", "All Wheel Drive.", "None of the above", "C" ],
	["What is the best selling car of all time?", "Toyota Corolla.", "Ford Model T.", "Volkswagen Beetle.", "Volkswagen Beetle.", "A"],
	["What does ABS stand for?", "Automatic Braking Service.", "Automatic Braking Service.", "Automobile Braking System.", "Antilock Braking System. ", "D"],
	["What is the name given to motorways in Germany with no speed limit?", "Bahnauto.", "Autoburt.", "Autobahn.", "Fahrzeug.", "C"],
	["What country are Volvo’s from?", "Norway.", "United Kingdom.", "France.", "Sweden.", "D"],
	["RPM stands for Revs per______________", "Moment.", "Mile", "Minute", "Machine", "C"],
	["What car manufacturer produces the ‘i40’ model? ", "BMW.", "Audi.", "Hyundai", "Kia.", "C"],
	["What is the lowest age you can be to have a Full Irish driving license?", "16. ", "17. ", "18. ", "19. ", "B"],
	["What car manufacterer's logo is four joined circles?", "Mitsubishi", "Toyota", "Audi", "Opel", "C"],
	["What car recieved the most sales in Ireland in 2016?", "Hyundai Tuscon", "Ford Focus", "Volkswagon Golf", "Skoda Octavia", "A"],
	["Which supercar has the quickest 0-60 time?", "2011 Chevrolet Corvette ZR1", "2009 Ariel Atom 3", "2015 Bugatti EB110 GT", "2012 Audi R8 GT", " "],
	["What horsepower has the most powerful engine in the world?", "16,000", "124,000", "109,000", "58,000 ", "C"],
	["Coupe vehicles have how many doors?", "1", "2", "3", "4", "B"],
	["Spoilers are used to perform what function?", "Increase fuel economy", "None", "Add down force", " Add up force", "C"],
	["What was the first car to be mass-produced?", "Model T", "Model A", "Austin 9", "Corolla", "A"],
	["Which manufacturer produced the Defender?", "Ford", "Toyota", "Land Rover", "Chevrolet", "C"]
	];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	var fname = localStorage.getItem("firstname");
	var sname = localStorage.getItem("lastname");
	var email = localStorage.getItem("email");
	
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<br> <b>Name: </b>" + fname + " " + sname + "<br> <b>Email: </b>" + email;
		test.innerHTML += "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";

		pos = 0;
		correct = 0;
		return false;
	}
	
	var bar=document.getElementById("progressBar");//Progress bar value
	
	
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	
	 bar.value = (pos+1)//Progress bar increments as we go through questions, starts at 1
	 
	 
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
	test.innerHTML += "<button type='submit' onclick='checkAnswer()'>Submit Answer</button> <div class='container' style='background-color:#f1f1f1'><button type='reset' class='restartbtn'><a href='quiz.html'>Start Again</a></button></div>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice === questions[pos][5]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);


