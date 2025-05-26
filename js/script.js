
function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
	//because one works in safari and the other in any other browser like chrome , safari etc.
}

 const bookNowButton = document.querySelector('.cta-button');
  const bookingForm = document.getElementById('bookingForm');

function choice(){
	 //this will give the user a pop. up of receiving the data and hide the form again.
	bookingForm.style.display='none';
	
	alert("you reservation is recieved");
	bookNowButton.textContent = 'Book Your Table Now!';// here there is no mechnism to store data without backend.
}

//the below functiion has been explained as it was something i learnt on my own while doing this project.
//now using the concept of DOM i am using with the prpoperty of event listeners
document.addEventListener('DOMContentLoaded', function() {// to make sure that the form doesnt run befor DOm gets fulluy Loaded.
  //to select the specific feilds that we will be using. Book Now and booking form.

  bookNowButton.addEventListener('click', function(e) {
    e.preventDefault();// so when the button will be clicked this will stop the default action, or else it can redirect to a new page
    if (bookingForm.style.display === 'none') {
      bookingForm.style.display = 'block';
      bookNowButton.textContent = 'Close Form';
    } else {
      bookingForm.style.display = 'none';
      bookNowButton.textContent = 'Book Your Table Now!';//this if else is to toggle the appereance of the form and change the text on it
    }
  });});  				// this form and hiding it, i learnt it partially with the help of AI and partially from W#schools and Stack overflow
