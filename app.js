var taskNumber = +prompt("Enter the task number to run the task you want to check: (From 1 to 6)");
if (taskNumber === 1) {

//Alert for user.
   alert("Hello User!");

}

else if (taskNumber === 2) {

//Mr Bean alert
   alert("Hello, Mr Bean.\nHow are you?");

}

else if (taskNumber === 3) {

//message variable script
   var message;
   message = "Hello World";
   alert(message);

}

else if (taskNumber === 4) {

//book variable script
   var book = "A smarter way to learn JavaScript";
   document.write(book);
   document.write("<br /><br />");

}

else if (taskNumber === 5) {

//age variable script
   var age = 20;
   alert("I am " + age + " years old.");

}

else if (taskNumber === 6) {

//birthYear variable script
   var birthYear = 2001;
   document.write("I was born in " + birthYear + ".");

}

else {
   alert("Invalid input!);
}
